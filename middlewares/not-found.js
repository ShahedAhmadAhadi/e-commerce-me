const notFound = (req, res) => res.status(404).json({result: 'not_found', desc: `No ${req.method}  ${req.url} available`})

module.exports = notFound