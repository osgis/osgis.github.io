L.TileLayer.Sasplaneta = L.TileLayer.extend ({
		this.sasPlanetaTemplate = pathToCache + "/z{0}{5}{1}{5}x{2}{5}{3}{5}y{4}.jpg"
		L.TileLayer.prototype.initialize.call(this, this.sasPlanetaTemplate, options);
    },
	

L.tileLayer.sasplaneta = function (pathToCache, options) {
	return new L.TileLayer.Sasplaneta(pathToCache, options);
};