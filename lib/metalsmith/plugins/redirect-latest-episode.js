const debug = require('debug')('redirect-latest-episode')  // DEBUG=redirect-latest-episode

/**
 * Redirect Latest Episode (Metalsmith plugin)
 *
 * Redirects a call to '/latest/' to the latest episode
 *
 * @param {Object}          opts - plugin options
 * @param {(Object|string)} opts.filter - a glob pattern (passed to minimatch) or a filter function compatible with Array.filter() (will be passed Metalsmith filenames)
 *
 */
function redirectLatestEpisodePlugin () {
  // main plugin returned to Metalsmith
  return function redirectLatestEpisode (files, metalsmith, done) {
    const episodes = metalsmith.metadata().collections.episodes
    const latestEpisode = episodes.slice(episodes.length - 1)[0]
    const redirectsFile = files['_redirects'] || {contents: ''}
    const redirectLine = `/latest ${latestEpisode.path} 301`
    redirectsFile.contents = [redirectsFile.contents.toString(), redirectLine].join('\n')
    files['_redirects'] = redirectsFile
    // tell Metalsmith that we're done
    done()
  }
}

module.exports = redirectLatestEpisodePlugin
// require this plugin in ./tasks/metalsmith using:
// const redirectLatestEpisode = require(paths.lib('metalsmith/plugins/redirect-latest-episode.js'))
