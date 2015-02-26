L.DynamicAjaxGeoJSON = L.GeoJSON.extend({
	
	initialize: function(urlTemplate, options) {
		this.urlTemplate = urlTemplate;
		L.GeoJSON.prototype.initialize.call(this, options);
	},
		
	onAdd: function (map) {
		L.GeoJSON.prototype.onAdd.call(this, map);
		map.on('moveend', this._updateData, this);
		this._updateData ();
	}, 
	
	onRemove: function(map) {
		L.GeoJSON.prototype.onRemove.call(this, map);	
		map.off('moveend', this._updateData, this); 
	},
	
	_updateData: function (){
		var that = this;
		var bb = this._map.getBounds();
		var sw = bb.getSouthWest();
		var	ne = bb.getNorthEast();
		var urlWithbbox = L.Util.template(this.urlTemplate, {
					lat1: sw.lat, lon1: sw.lng,
					lat2: ne.lat, lon2: ne.lng
				});
		
		$.getJSON(urlWithbbox,function(jsonData){that.clearLayers();that.addData (jsonData);}
		);
	}
	
});

L.dynamicAjaxGeoJson = function(url, options) {
	return new L.DynamicAjaxGeoJSON(url, options);
};
