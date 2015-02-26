L.TileLayer.Sasplaneta = L.TileLayer.extend ({	initialize: function (pathToCache, options) {
		this.sasPlanetaTemplate = pathToCache + "/z{0}{5}{1}{5}x{2}{5}{3}{5}y{4}.jpg"
		L.TileLayer.prototype.initialize.call(this, this.sasPlanetaTemplate, options);
    },
		getTileUrl: function (tilePoint){		this._adjustTilePoint(tilePoint);		return L.Util.template(this.sasPlanetaTemplate, {0: tilePoint.z + 1, 1:parseInt(tilePoint.x/1024), 5:"/", 2:tilePoint.x, 3:parseInt(tilePoint.y/1024), 4:tilePoint.y});	}	});

L.tileLayer.sasplaneta = function (pathToCache, options) {
	return new L.TileLayer.Sasplaneta(pathToCache, options);
};