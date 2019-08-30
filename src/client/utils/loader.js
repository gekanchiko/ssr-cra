const load = async externals => {
  return Promise.all(
    externals.map(async ({ url, name }) => loadPlugin(url, name))
  );
};

export default load;

const loadPlugin = async (pluginUri, name) => {
  try {
    const htmlData = await fetch(`${pluginUri}`)
      .then(response => response.text());

    const chunkId = /.+static\/js\/(\d+)\.chunk\.js.*/.exec(htmlData);
    const chunkName = `${chunkId && chunkId[1]}.chunk`;

    return new Promise(resolve => {
      loadPluginChunk(pluginUri, 'bundle', () =>
        loadPluginChunk(pluginUri, chunkName, () =>
          loadPluginChunk(pluginUri, 'main.chunk', resolve)
        )
      )
    });
  } catch (e) {
    console.log(`Error loading module '${name}': `, e);
  }
};

function loadPluginChunk (pluginUri, name, callback) {
  return loadScript(pluginChunk(pluginUri, name), callback);
}

function loadScript (url, callback) {
  let script = document.createElement('script');
  script.type = 'application/javascript';
  script.src = url;
  script.onload = () => {
    document.body.removeChild(script);
    callback && callback();
  };
  document.body.appendChild(script);
}

function pluginChunk (pluginUri, name) {
  return `${pluginUri}/static/js/${name}.js`;
}