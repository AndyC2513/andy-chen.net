const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const ip = require('internal-ip')
const portFinderSync = require('portfinder-sync')

const infoColor = (_message) =>
{
    return ``
}

module.exports = merge(
    commonConfiguration,
    {
        stats: 'errors-warnings',
        mode: 'development',
        devServer:
        {
            host: 'localhost',
            port: portFinderSync.getPort(3000),
            open: true,
            https: false,
            allowedHosts: 'all',
            hot: false,
            watchFiles: ['src/**', 'static/**'],
            static:
            {
                watch: true,
                directory: path.join(__dirname, '../static')
            },
            client:
            {
                logging: 'none',
                overlay: true,
                progress: false
            },
            onAfterSetupMiddleware: function(devServer)
            {
                const port = devServer.options.port
                const https = devServer.options.https ? 's' : ''
                const domain1 = `http${https}://localhost:${port}`
                
                console.log(`Project running at:\n  - ${infoColor(domain1)}`)
            }
        }
    }
)
