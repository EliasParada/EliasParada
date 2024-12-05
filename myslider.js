"1": {
			id: 1,
			slide: {
				title: "Prueva",
				order: "4",
				description: "PRUEBA",
			},
			layers: {
				"0": { // Contenedor para la imagen 1
					"listen": ["mouseenter", "mouseleave"],
					"fluid": {
						"tx": true,
						"tr": true,
						"sp": true
					},
					"id": 0,
					"alias": "IMAGEN 1",
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
			}
		},