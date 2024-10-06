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
		"size": {
			"fullHeight": true,
			"contentFH": true,
			"width": [1240, 1240, 1024, 778, 480],
			"height": [750, 750, 750, 1240, 1240],
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
		"1": {
			id: 1,
			slide: {
				id: 1,
				title: "Prueva",
				order: "4",
				description: "PRUEBA",
				"actions": [
					{"a": "playScene", "evt": "mouseenter", "rec": true, "target": ["1"], "sc": "scene_1", "src": [0]},
					{"a": "playScene", "evt": "mouseleave", "rec": true, "target": ["1"], "sc": "scene_2", "src": [0]},
					{"a": "playScene", "evt": "mouseenter", "sc": "in", "rec": true, "target": ["2"], "src": [0]},
					{"a": "playScene", "evt": "mouseleave", "sc": "scene_1", "rec": true, "target": ["2"], "src": [0]}
				]
			},
			layers: {
				"0": { // Contenedor para la imagen 1, Definir posición y tamaño
					"listen": ["mouseenter", "mouseleave"],
					"id": 0,
					"alias": "Item-1",
					"subtype": "group",
					"size": { // Tamaño del contenedor
						"w": "60%",
						"h": "100%",
					},
					"pos": { // Posición del contenedor
						"h": ["right", "right", "right", "right", "right"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
					},
					"cursor": "pointer",
					"tl": {"in": { "content": {"all": [{}, {}]}} // Sin esto no funciona, no se porque
					},
					"p": {"t": [0, 0, 0, 0, 0], "b": [0, 0, 0, 0, 0], "l": [0, 0, 0, 0, 0], "r": [0, 0, 0, 0, 0]},
					"m": {"t": [0, 0, 0, 0, 0], "b": [0, 0, 0, 0, 0], "l": [0, 0, 0, 0, 0], "r": [0, 0, 0, 0, 0]},
					"border": {
						"s": "solid",
						"c": "#000000", // El color se podrá elegir en un futuro
						"w": {
							"t": ["10px", "10px", "10px", "10px", "10px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["10px", "10px", "10px", "10px", "10px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"type": "container",
				},
				"1": { // Imagen de la libreria 1 para el texto CAROUSEL-PROJECTS-1-2
					"id": 1,
					"size": {"w": "100%", "h": "100%",},
					"pid": "0", // ID del contenedor
					"bg": {
						"image": {
							"src": "images\/projects\/lingotter\/1.jpg",
							"lib_id": 28300,
							"pos": {"x": "50%", "y": "50%"},
							"repeat": "no-repeat",
							"size": "cover",
						}
					},
					"tl": {
						"in": {"mask": {"all": [{}, {}]}},
						"scene_1": {
							"content": {"all": [{"t": 0, "e": "power4.out", "sX": "1.05", "sY": "1.05"}]},
							"mask": {"all": [{"t": 0, "d": 1000, "f": 1000, "e": "power4.out", "oflow": "hidden", "off": 1 }]}
						},
						"scene_2": {"content": {"all": [{"t": 0, "e": "sine.out", "sX": "1", "sY": "1"}]}}
					},
					"type": "shape"
				},
				"2": { // Texto CAROUSEL-PROJECTS-1-2
					"id": 2,
					"alias": "Images-normalizer", // Opcional
					"size": {"w": "100%"},
					"pos": {"v": "bottom", "pos": "absolute"},
					"pid": "0",
					"zIndex": 7,
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"orig": [{"rgba": "rgba(0,0,0,0)", "p": 0}, {"rgba": "rgba(0,0,0,0)", "p": 0}, {"rgba": "rgba(0,0,0,0.75)", "p": 100}, {"rgba": "rgba(0,0,0,0.75)", "p": 100}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"tl": { // Mostrar layer
						"in": { // Entrada cuando se presiona
							"content": {"all": [{"t": "w0"}, {"t": 0}]}, // Para que se muestre la primer vez
							"clip": {
								"orig": "b",
								"all": [
									{"d": 0, "e": "power4.out", "c": "0%"}, 
									{"d": "750", "e": "power4.out", "c": 100}
								]
							}
						},
						"scene_1": { // Ocultar cuando se presiona otro
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{"t": 0, "e": "sine.out", "c": "0%"}]
							}
						},
					},
					"p": 0, // Padding
					"m": 0, // Margin
					"tA": "center", // Text Align
					"color": "#ffffff",
					"font": {"family": "Oswald", "weight": "700", "ls": 0}, // ls = Letter spacing
					"lh": "70px", // Espacio entre lineas
					"type": "text",
				},
			}
		},
		"1894": {
			"id": 1894,
			"slide": {
				"id": 1894,
				"actions": [{
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["1"],
					"sc": "scene_1",
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["1"],
					"sc": "scene_2",
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["6"],
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["6"],
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["10"],
					"sc": "scene_1",
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["10"],
					"sc": "scene_2",
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["11"],
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["11"],
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["13"],
					"sc": "scene_1",
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["13"],
					"sc": "scene_2",
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["14"],
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["14"],
					"src": [12]
				}],
				"title": "",
				"order": "1",
				"description": "",
			},
			"layers": {
				"0": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 0,
					"alias": "Item-1",
					"subtype": "group",
					"size": {
						"w": ["60%", "60%", "60%", "50%", "50%"],
						"h": ["100%", "100%", "100%", "50%", "50%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": [0, 0, 0, 0, 0],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 6,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["20px", "20px", "20px", "20px", "20px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["20px", "20px", "20px", "20px", "20px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"1": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 1,
					"alias": "Vertical-rectangle",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "0",
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall1.jpg",
							"lib": "",
							"lib_id": 28298,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["1px", "1px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"6": {
					"id": 6,
					"alias": "Title-1",
					"content": {
						"text": "Don Felinos\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">In ancient times cats were worshipped as gods; \nthey have not forgotten this.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["-1px", "-1px", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "0",
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"9": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 9,
					"alias": "Item-2",
					"subtype": "group",
					"size": {
						"w": ["40%", "40%", "40%", "50%", "50%"],
						"h": ["50%", "50%", "50%", "50%", "50%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["right", "right", "right", "right", "right"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 7,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["20px", "20px", "20px", "20px", "20px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["10px", "10px", "10px", "10px", "10px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"10": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 10,
					"alias": "Square-1",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": 9,
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall10.jpg",
							"lib": "",
							"lib_id": 28299,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["0px", "0px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"11": {
					"id": 11,
					"alias": "Title-2",
					"content": {
						"text": "Sir Doge\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">Outside of a dog, a book is a man\u2019s best friend. Inside of a dog it\u2019s too dark to read.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": [0, 0, 0, 0, 0],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": 9,
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "20px", "20px", "20px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"12": { // Contenedor para la imagen 28300
					"listen": ["mouseenter", "mouseleave"],
					"id": 12,
					"alias": "Item-3",
					"subtype": "group",
					"size": { // Tamaño del contenedor
						"w": "40%",
						"h": "50%",
					},
					"pos": { // Posición del contenedor
						"h": ["right", "right", "right", "right", "right"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
					},
					"cursor": "pointer",
					"tl": {"in": { "content": {"all": [{}, {}]}} // Sin esto no funciona, no se porque
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"border": {
						"s": "solid",
						"c": "#000000", // El color se podrá elegir en un futuro
						"w": {
							"t": ["10px", "10px", "10px", "10px", "10px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["10px", "10px", "10px", "10px", "10px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"type": "container",
				},
				"13": { // Imagen de la libreria 28300 para el texto SR7_1306_1-1894-14
					"id": 13,
					"size": {"w": "100%", "h": "100%",},
					"pid": 12, // ID del contenedor
					"bg": {
						"image": {
							"src": "images\/fg1.jpeg",
							"lib_id": 28300,
							"pos": {"x": "50%", "y": "50%"},
							"repeat": "no-repeat",
							"size": "cover",
						}
					},
					"tl": {
						"in": {"mask": {"all": [{}, {}]}},
						"scene_1": {
							"content": {"all": [{"t": 0, "e": "power4.out", "sX": "1.05", "sY": "1.05"}]},
							"mask": {"all": [{"t": 0, "d": 1000, "f": 1000, "e": "power4.out", "oflow": "hidden", "off": 1 }]}
						},
						"scene_2": {"content": {"all": [{"t": 0, "e": "sine.out", "sX": "1", "sY": "1"}]}}
					},
					"type": "shape"
				},
				"14": {
					"id": 14,
					"alias": "Images-normalizer", // Opcional
					"size": {"w": "100%"},
					"pos": {"v": "bottom", "pos": "absolute"},
					"pid": 12,
					"zIndex": 7,
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"orig": [{"rgba": "rgba(0,0,0,0)", "p": 0}, {"rgba": "rgba(0,0,0,0)", "p": 0}, {"rgba": "rgba(0,0,0,0.75)", "p": 100}, {"rgba": "rgba(0,0,0,0.75)", "p": 100}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"tl": { // Mostrar layer
						"in": { // Entrada cuando se presiona
							"content": {"all": [{"t": "w0"}, {"t": 0}]}, // Para que se muestre la primer vez
							"clip": {
								"orig": "b",
								"all": [
									{"d": 0, "e": "power4.out", "c": "0%"}, 
									{"d": "750", "e": "power4.out", "c": 100}
								]
							}
						},
						"scene_1": { // Ocultar cuando se presiona otro
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{"t": 0, "e": "sine.out", "c": "0%"}]
							}
						},
					},
					"p": 0, // Padding
					"m": 0, // Margin
					"tA": "center", // Text Align
					"color": "#ffffff",
					"font": {"family": "Oswald", "weight": "700", "ls": 0}, // ls = Letter spacing
					"lh": "70px", // Espacio entre lineas
					"type": "text",
				},
				"16": {
					"rTo": "slide",
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 16,
					"alias": "Copy  font-loader",
					"content": {
						"text": " "
					},
					"size": {
						"w": ["100px", "100px", "82px", "62px", "38px"],
						"h": ["100px", "100px", "82px", "62px", "38px"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pE": "none",
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["#a", 20, "16", "12", "7"],
						"weight": ["300", "300", "300", "300", "300"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"17": {
					"rTo": "slide",
					"id": 17,
					"alias": "Slide BG Layer",
					"subtype": "slidebg",
					"size": {
						"cMode": "cover"
					},
					"pos": {
						"h": ["center", "center", "center", "center", "center"],
						"v": ["center", "center", "center", "center", "center"],
						"pos": "absolute"
					},
					"zIndex": 0,
					"order": 0,
					"display": ["block", "block", "block", "block", "block"],
					"tl": {
						"in": {
							"bg": {
								"ms": 10,
								"rnd": false,
								"temp": {
									"t": "*clear* No Transition",
									"p": "notransition",
									"m": "basic",
									"g": "fade"
								},
								"addOns": [],
								"in": {
									"o": 1
								},
								"out": {
									"a": false
								}
							}
						}
					},
					"type": "shape"
				}
			}
		},
		"1895": {
			"id": 1895,
			"slide": {
				"addOns": [],
				"id": 1895,
				"version": "6.7.9",
				"actions": [{
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["1"],
					"sc": "scene_1",
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["1"],
					"sc": "scene_2",
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["6"],
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["6"],
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["17"],
					"sc": "scene_1",
					"src": [5]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["17"],
					"sc": "scene_2",
					"src": [5]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["18"],
					"src": [5]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["18"],
					"src": [5]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["10"],
					"sc": "scene_1",
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["10"],
					"sc": "scene_2",
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["11"],
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["11"],
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["13"],
					"sc": "scene_1",
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["13"],
					"sc": "scene_2",
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["14"],
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["14"],
					"src": [12]
				}],
				"title": "",
				"parentId": null,
				"language": "default",
				"order": "2",
				"thumb": {
					"src": "",
					"srcId": "",
					"admin": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/t2.jpg",
					"adminId": "",
					"dimension": "slider"
				},
				"description": "",
				"attr": {
					"class": "",
					"data": "",
					"id": "",
					"a": "",
					"aO": "ml",
					"t": "",
					"tO": "",
					"deepLink": "",
					"attr": ""
				},
				"publish": {
					"from": "",
					"to": "",
					"state": ""
				},
				"slideshow": {
					"stop": false,
					"len": "default",
					"hal": 0,
					"hom": false,
					"hfn": false
				},
				"loop": {
					"u": false,
					"r": -1,
					"s": 0,
					"e": 99999
				}
			},
			"layers": {
				"0": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 0,
					"alias": "Item-1",
					"subtype": "group",
					"size": {
						"w": ["45%", "45%", "45%", "50%", "50%"],
						"h": ["60%", "60%", "60%", "60%", "60%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": [0, 0, 0, 0, 0],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 7,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["20px", "20px", "20px", "20px", "20px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["10px", "10px", "10px", "10px", "10px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"1": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 1,
					"alias": "Vertical-rectangle",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "0",
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall7.jpg",
							"lib": "",
							"lib_id": 28302,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["1px", "1px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"5": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 5,
					"alias": "Item-4",
					"subtype": "group",
					"size": {
						"w": ["45%", "45%", "45%", "50%", "50%"],
						"h": ["40%", "40%", "40%", "40%", "40%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": [0, 0, 0, 0, 0],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 10,
					"order": 10,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"vis": [true, true, true, true, true],
					"viSH": false,
					"viOC": true,
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["10px", "10px", "10px", "10px", "10px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["20px", "20px", "20px", "20px", "20px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"6": {
					"id": 6,
					"alias": "Lingotter",
					"content": {
						"text": "Mr. Frogger\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">We are born princes and the civilizing process makes us frogs.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "0",
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"9": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 9,
					"alias": "Item-2",
					"subtype": "group",
					"size": {
						"w": ["55%", "55%", "55%", "50%", "50%"],
						"h": ["40%", "40%", "40%", "40%", "40%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["right", "right", "right", "right", "right"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 8,
					"order": 8,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["20px", "20px", "20px", "20px", "20px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["10px", "10px", "10px", "10px", "10px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"10": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 10,
					"alias": "Square-1",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "9",
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sssliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall2.jpgs",
							"lib": "",
							"lib_id": 28303,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["0px", "0px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"11": {
					"id": 11,
					"alias": "Title-2",
					"content": {
						"text": "Howler\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">A man might befriend a wolf, even break a wolf, but no man could truly tame a wolf.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": [0, 0, 0, 0, 0],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "9",
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"12": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 12,
					"alias": "Item-3",
					"subtype": "group",
					"size": {
						"w": ["55%", "55%", "55%", "50%", "50%"],
						"h": ["60%", "60%", "60%", "60%", "60%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["right", "right", "right", "right", "right"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 9,
					"order": 9,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["10px", "10px", "10px", "10px", "10px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["20px", "20px", "20px", "20px", "20px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"13": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 13,
					"alias": "Square-2",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "12",
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall9.jpg",
							"lib": "",
							"lib_id": 28304,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["0px", "0px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"14": {
					"id": 14,
					"alias": "Title-3",
					"content": {
						"text": "Budgie Boss\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "12",
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#00f", "#00f", "#00f", "#00f", "#00f"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"16": {
					"rTo": "slide",
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 16,
					"alias": "Copy  font-loader",
					"content": {
						"text": " "
					},
					"size": {
						"w": ["100px", "100px", "82px", "62px", "38px"],
						"h": ["100px", "100px", "82px", "62px", "38px"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pE": "none",
					"zIndex": 6,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["#a", 20, "16", "12", "7"],
						"weight": ["300", "300", "300", "300", "300"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"17": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 17,
					"alias": "Rect-4",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "5",
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall4.jpg",
							"lib": "",
							"lib_id": 28305,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["1px", "1px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"18": {
					"id": 18,
					"alias": "Title-4",
					"content": {
						"text": "James Rabbit\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">Those guards are going to be all sorts of pissed when they find out they've been following a bunny rabbit.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "5",
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"19": {
					"rTo": "slide",
					"id": 19,
					"alias": "Slide BG Layer",
					"subtype": "slidebg",
					"size": {
						"cMode": "cover"
					},
					"pos": {
						"h": ["center", "center", "center", "center", "center"],
						"v": ["center", "center", "center", "center", "center"],
						"pos": "absolute"
					},
					"zIndex": 0,
					"order": 0,
					"display": ["block", "block", "block", "block", "block"],
					"tl": {
						"in": {
							"bg": {
								"ms": 10,
								"rnd": false,
								"temp": {
									"t": "*clear* No Transition",
									"p": "notransition",
									"m": "basic",
									"g": "fade"
								},
								"addOns": [],
								"in": {
									"o": 1
								},
								"out": {
									"a": false
								}
							}
						}
					},
					"type": "shape"
				}
			}
		},
		"1896": {
			"id": 1896,
			"slide": {
				"addOns": [],
				"id": 1896,
				"version": "6.7.9",
				"actions": [{
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["1"],
					"sc": "scene_1",
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["1"],
					"sc": "scene_2",
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["6"],
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["6"],
					"src": [0]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["10"],
					"sc": "scene_1",
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["10"],
					"sc": "scene_2",
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["11"],
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["11"],
					"src": [9]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"rec": true,
					"target": ["13"],
					"sc": "scene_1",
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"rec": true,
					"target": ["13"],
					"sc": "scene_2",
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseenter",
					"sc": "in",
					"rec": true,
					"target": ["14"],
					"src": [12]
				}, {
					"a": "playScene",
					"evt": "mouseleave",
					"sc": "scene_1",
					"rec": true,
					"target": ["14"],
					"src": [12]
				}],
				"title": "",
				"parentId": null,
				"language": "default",
				"order": "3",
				"thumb": {
					"src": "",
					"srcId": "",
					"admin": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/t3.jpg",
					"adminId": "",
					"dimension": "slider"
				},
				"description": "",
				"attr": {
					"class": "",
					"data": "",
					"id": "",
					"a": "",
					"aO": "ml",
					"t": "",
					"tO": "",
					"deepLink": "",
					"attr": ""
				},
				"publish": {
					"from": "",
					"to": "",
					"state": ""
				},
				"slideshow": {
					"stop": false,
					"len": "default",
					"hal": 0,
					"hom": false,
					"hfn": false
				},
				"loop": {
					"u": false,
					"r": -1,
					"s": 0,
					"e": 99999
				}
			},
			"layers": {
				"0": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 0,
					"alias": "Item-1",
					"subtype": "group",
					"size": {
						"w": ["50%", "50%", "50%", "50%", "50%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["right", "right", "right", "right", "right"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 6,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["20px", "20px", "20px", "20px", "20px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["20px", "20px", "20px", "20px", "20px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"1": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 1,
					"alias": "Vertical-rectangle",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "0",
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall8.jpg",
							"lib": "",
							"lib_id": 28307,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["1px", "1px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"6": {
					"id": 6,
					"alias": "Title-1",
					"content": {
						"text": "Mr. Crab\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">You cannot teach a crab to walk straight.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["-1px", "-1px", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": "0",
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"9": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 9,
					"alias": "Item-2",
					"subtype": "group",
					"size": {
						"w": ["50%", "50%", "50%", "50%", "50%"],
						"h": ["55%", "55%", "55%", "55%", "55%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 7,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["20px", "20px", "20px", "20px", "20px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["10px", "10px", "10px", "10px", "10px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"10": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 10,
					"alias": "Square-1",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": 9,
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall3.jpg",
							"lib": "",
							"lib_id": 28308,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["0px", "0px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"11": {
					"id": 11,
					"alias": "Title-2",
					"content": {
						"text": "Snake\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">The world of men is dreaming, it has gone mad in its sleep, and a snake is strangling it, but it can't wake up.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": [0, 0, 0, 0, 0],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": 9,
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"12": {
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 12,
					"alias": "Item-3",
					"subtype": "group",
					"size": {
						"w": ["50%", "50%", "50%", "50%", "50%"],
						"h": ["45%", "45%", "45%", "45%", "45%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"zIndex": 8,
					"order": 8,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"cursor": "pointer",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"border": {
						"s": ["solid", "solid", "solid", "solid", "solid"],
						"c": "#ffffff",
						"w": {
							"t": ["10px", "10px", "10px", "10px", "10px"],
							"r": ["10px", "10px", "10px", "10px", "10px"],
							"b": ["20px", "20px", "20px", "20px", "20px"],
							"l": ["10px", "10px", "10px", "10px", "10px"]
						}
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "container",
					"content": {
						"text": ""
					},
					"toggle": {
						"text": ""
					}
				},
				"13": {
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 13,
					"alias": "Square-2",
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["100%", "100%", "100%", "100%", "100%"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["1px", "1px", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": 12,
					"zIndex": 6,
					"order": 7,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "solid",
							"orig": "rgba(0,0,0,0.5)",
							"string": "rgba(0, 0, 0, 0.5)"
						},
						"image": {
							"ratio": 1,
							"src": "https:\/\/www.sliderrevolution.com\/wp-content\/uploads\/revslider\/Masonry-Gallery-Carousel\/animalsmall6.jpg",
							"lib": "",
							"lib_id": 28309,
							"lib_size": "full",
							"fromStream": false,
							"streamType": "gallery",
							"pos": {
								"x": "50%",
								"y": "50%"
							},
							"repeat": "no-repeat",
							"size": "cover",
							"sizeVal": 0,
							"seo": false
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"sX": "1.5",
									"sY": "1.5",
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"pE": "d",
									"x": ["0px", "0px", "0px", "0px", "0px"],
									"y": ["0px", "0px", "0px", "0px", "0px"],
									"sX": 1,
									"sY": 1,
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.out",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1.05",
									"sY": "1.05",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power4.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"scene_2": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"sX": "1",
									"sY": "1",
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "sine.out",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"oflow": "hidden",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"mask": {
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "power3.inOut",
									"oflow": "visible",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"type": "shape"
				},
				"14": {
					"id": 14,
					"alias": "Title-3",
					"content": {
						"text": "The G.O.A.T.\n<div style=\"font-size: 0.3em;font-weight:300;line-height:1.5em;margin-top:1em;opacity:0.75\">Love is not love, without a violin playing goat.<\/div>"
					},
					"size": {
						"w": ["100%", "100%", "100%", "100%", "100%"],
						"h": ["auto", "auto", "auto", "auto", "auto"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"h": ["center", "center", "center", "center", "center"],
						"v": ["bottom", "bottom", "bottom", "bottom", "bottom"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pid": 12,
					"zIndex": 7,
					"order": 6,
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"type": "linear",
							"angle": "180",
							"easing": "none",
							"strength": 100,
							"orig": [{
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "bottom"
							}, {
								"rgba": "rgba(0,0,0,0)",
								"p": 0,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "top"
							}, {
								"rgba": "rgba(0,0,0,0.75)",
								"p": 100,
								"align": "bottom"
							}],
							"string": "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%)"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}, {
									"t": 0,
									"d": 750,
									"f": 750,
									"e": "power4.out",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": "w0",
									"d": 0,
									"f": 0,
									"e": "power4.out",
									"c": "0%"
								}, {
									"t": 0,
									"d": "750",
									"f": "750",
									"e": "power4.out",
									"c": 100
								}]
							}
						},
						"scene_1": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 500,
									"f": 500,
									"e": "sine.out",
									"pE": "d",
									"x": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"y": ["(inherit)", "(inherit)", "(inherit)", "(inherit)", "(inherit)"],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "500",
									"f": "500",
									"e": "sine.out",
									"c": "0%",
									"cb": "inherit"
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 1000,
									"f": 1000,
									"e": "sine.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": "1",
									"xRe": 0,
									"yRe": 0,
									"off": 1
								}]
							},
							"clip": {
								"orig": "b",
								"type": "r",
								"all": [{
									"t": 0,
									"d": "1000",
									"f": "1000",
									"e": "sine.inOut",
									"c": "inherit"
								}]
							}
						}
					},
					"p": {
						"t": [10, 10, 10, 10, 10],
						"b": [50, 50, 30, 30, 20],
						"l": [20, 20, 20, 20, 20],
						"r": [20, 20, 20, 20, 20]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"tA": ["center", "center", "center", "center", "center"],
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["70px", "70px", "60px", "50px", "40px"],
						"weight": ["700", "700", "700", "700", "700"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["70px", "70px", "60px", "50px", "40px"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"16": {
					"rTo": "slide",
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 16,
					"alias": "Copy  font-loader",
					"content": {
						"text": " "
					},
					"size": {
						"w": ["100px", "100px", "82px", "62px", "38px"],
						"h": ["100px", "100px", "82px", "62px", "38px"],
						"minW": ["none", "none", "none", "none", "none"],
						"minH": ["none", "none", "none", "none", "none"]
					},
					"pos": {
						"x": ["auto", "auto", "auto", "auto", "auto"],
						"y": ["auto", "auto", "auto", "auto", "auto"],
						"pos": "absolute",
						"float": ["none", "none", "none", "none", "none"],
						"clear": ["none", "none", "none", "none", "none"]
					},
					"pE": "none",
					"display": ["block", "block", "block", "block", "block"],
					"vA": "top",
					"bg": {
						"color": {
							"orig": "transparent",
							"type": "solid",
							"string": "transparent"
						}
					},
					"attr": {
						"aO": "ml",
						"tO": "ml"
					},
					"tl": {
						"in": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 0,
									"f": 0,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}, {
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "d",
									"x": [0, 0, 0, 0, 0],
									"y": [0, 0, 0, 0, 0],
									"o": 1,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						},
						"out": {
							"content": {
								"pers": "600px",
								"orig": {
									"x": "50%",
									"y": "50%",
									"z": "0"
								},
								"all": [{
									"t": 0,
									"d": 300,
									"f": 300,
									"e": "power3.inOut",
									"pE": "n",
									"addOns": {
										"explodinglayers": {
											"u": true,
											"color": {
												"type": "solid",
												"orig": "#000000",
												"string": "rgba(0, 0, 0, 1)"
											},
											"density": 1,
											"direction": "left",
											"padding": 150,
											"power": 2,
											"randomsize": false,
											"randomspeed": false,
											"size": 5,
											"speed": 1,
											"style": "fill",
											"type": "circle"
										}
									},
									"x": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"y": ["inherit", "inherit", "inherit", "inherit", "inherit"],
									"o": 0,
									"xRe": 0,
									"yRe": 0,
									"off": 0
								}]
							}
						}
					},
					"p": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"m": {
						"t": [0, 0, 0, 0, 0],
						"b": [0, 0, 0, 0, 0],
						"l": [0, 0, 0, 0, 0],
						"r": [0, 0, 0, 0, 0]
					},
					"color": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
					"font": {
						"family": "Oswald",
						"size": ["#a", 20, "16", "12", "7"],
						"weight": ["300", "300", "300", "300", "300"],
						"ls": [0, 0, 0, 0, 0]
					},
					"lh": ["#a", 25, "20", "15", "9"],
					"type": "text",
					"toggle": {
						"text": ""
					}
				},
				"17": {
					"rTo": "slide",
					"id": 17,
					"alias": "Slide BG Layer",
					"subtype": "slidebg",
					"size": {
						"cMode": "cover"
					},
					"pos": {
						"h": ["center", "center", "center", "center", "center"],
						"v": ["center", "center", "center", "center", "center"],
						"pos": "absolute"
					},
					"zIndex": 0,
					"order": 0,
					"display": ["block", "block", "block", "block", "block"],
					"tl": {
						"in": {
							"bg": {
								"ms": 10,
								"rnd": false,
								"temp": {
									"t": "*clear* No Transition",
									"p": "notransition",
									"m": "basic",
									"g": "fade"
								},
								"addOns": [],
								"in": {
									"o": 1
								},
								"out": {
									"a": false
								}
							}
						}
					},
					"type": "shape"
				}
			}
		},
		
	},
	"id": "1306",
	"addOns": []
};

if (SR7.F.init) SR7.F.init(); // DOUBLE CALL NOT A PROBLEM, MANAGED IN INIT
document.addEventListener('DOMContentLoaded', function () {
	if (SR7.F.init) SR7.F.init();
	else SR7.shouldBeInited = true;
});
window.addEventListener('load', function () {
	if (SR7.F.init) SR7.F.init();
	else SR7.shouldBeInited = true;
});