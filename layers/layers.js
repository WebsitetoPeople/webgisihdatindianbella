var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PenggunaanLahan_1 = new ol.format.GeoJSON();
var features_PenggunaanLahan_1 = format_PenggunaanLahan_1.readFeatures(json_PenggunaanLahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_1.addFeatures(features_PenggunaanLahan_1);
var lyr_PenggunaanLahan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenggunaanLahan_1, 
                style: style_PenggunaanLahan_1,
                interactive: true,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_1_0.png" /> bangunan geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_1.png" /> industri geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_2.png" /> lahan kosong geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_3.png" /> mangrove geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_4.png" /> Permukiman teratur geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_5.png" /> permukiman tidak teratur geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_6.png" /> sawah geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_7.png" /> Tambak<br />\
    <img src="styles/legend/PenggunaanLahan_1_8.png" /> waduk geojson<br />\
    <img src="styles/legend/PenggunaanLahan_1_9.png" /> <br />'
        });
var format_jalangeojson_2 = new ol.format.GeoJSON();
var features_jalangeojson_2 = format_jalangeojson_2.readFeatures(json_jalangeojson_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangeojson_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangeojson_2.addFeatures(features_jalangeojson_2);
var lyr_jalangeojson_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalangeojson_2, 
                style: style_jalangeojson_2,
                interactive: true,
                title: '<img src="styles/legend/jalangeojson_2.png" /> jalan geojson'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PenggunaanLahan_1.setVisible(true);lyr_jalangeojson_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PenggunaanLahan_1,lyr_jalangeojson_2];
lyr_PenggunaanLahan_1.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', 'layer': 'layer', 'path': 'path', });
lyr_jalangeojson_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PenggunaanLahan_1.set('fieldImages', {'id': 'Range', 'Luas_ha': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_jalangeojson_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PenggunaanLahan_1.set('fieldLabels', {'id': 'inline label', 'Luas_ha': 'inline label', 'layer': 'inline label', 'path': 'no label', });
lyr_jalangeojson_2.set('fieldLabels', {'NAMRJL': 'inline label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalangeojson_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});