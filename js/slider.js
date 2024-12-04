SR7.JSON['CAROUSEL-PROJECTS'] = {
	"settings": {
		"title": "Proyectos",
		"alias": "Proyectos",
		"type": "carousel",
		"fonts": {
			"Oswald": {
				"name": "Oswald",
				"normal": {"300": true, "400": true},
				"subset": {"latin": true}
			}
		},
		"class": "rs-respect-topbar",
		size: {
            fullHeight: false,
            contentFH: false,
            width: [1240, 1240, 1024, 778, 360], // Ajustar a 360 para móviles pequeños
            height: [750, 750, 750, 1000, 500], // Altura más reducida en móviles
        },
		"carousel": {
			"type": "h",
			"align": "center",
			"spin": "3d",
			"spinA": 1,
			"infinity": true,
			"skewX": "-10deg",
			"skewY": 0,
			"ease": "power3.inOut",
			"dur": 800,
			"showAllLayers": "all"
		},
		"slideshow": {"auto": false, "stopAt": 1},
		"nav": {
			"p": {"w": 50, "h": 100},
			"arrows": {
				"set": true,
				"def": {
					"left-icon": {"title": "Left Icon", "type": "icon", "data": "\\e82a"},
					"right-icon": {"title": "Right Icon", "type": "icon", "data": "\\e82b"},
					"dark-color": {"type": "color", "title": "Dark Color", "data": "#000000"},
					"light-color": {"type": "color", "title": "Light Color", "data": "#e8e8e8c9"},
					"width_height": {"type": "custom", "title": "Width & Height", "data": "70px" },
					"icon_size": {"type": "custom", "title": "Icon Size", "data": "40px" },
					"icon_line_height": {"type": "custom", "title": "Icon Line Height", "data": "70px"}
				},
				"key": "gallery-arrows",
				"css": ".gallery-arrows.sr7-arrows {\n\tcursor:pointer;\n\tborder-radius:0.3rem;\n\tbackground:##light-color##;\n\twidth:##width_height##;\n\theight:##width_height##;\n\tposition:absolute;\n\tdisplay:block;\n\tz-index:1000;\n\t    box-sizing: border-box;\n}\n.gallery-arrows.sr7-rightarrow.sr7-touchhover {\n\ttransform: scale(0.5);\n}\n.gallery-arrows.sr7-rightarrow.sr7-touchhover:before {\n\tpadding-left:10px;\n}\n.gallery-arrows.sr7-leftarrow.sr7-touchhover:before {\n\tpadding-right:10px;\n}\n.gallery-arrows.sr7-arrows:before {\n\tfont-family: 'revicons';\n\tfont-size:##icon_size##;\n\tcolor:##dark-color##;\n\tdisplay:block;\n\tline-height: ##icon_line_height##;\n\ttext-align: center;\n    transition: 0.3s padding ease-out;\n}\n.gallery-arrows.sr7-arrows.sr7-leftarrow:before {\n\tcontent: '##left-icon##';\n}\n.gallery-arrows.sr7-arrows.sr7-rightarrow:before {\n\tcontent: '##right-icon##';\n}\n\n",
				"on": true,
				"show": true,
			}
		},
		"general": {"lazyLoad": "smart"}
	},
    "slides": {

    },
    "id": "1",
	"addOns": []
};

// if (SR7.F.init) SR7.F.init();
// document.addEventListener('DOMContentLoaded', function () {
// 	if (SR7.F.init) SR7.F.init();
// 	else SR7.shouldBeInited = true;
// });
// window.addEventListener('load', function () {
// 	if (SR7.F.init) SR7.F.init();
// 	else SR7.shouldBeInited = true;
// });