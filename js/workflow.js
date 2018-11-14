(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 595,
	height: 595,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7941D").s().p("ApqJqQjljmgYk6QgDglAAglQAAjFBNimQA/iLB0h0QBZhXBlg7QDAhtDsgBQDtABDABtQBlA7BYBXQB0B0BACLQBNCmAADFQAAAlgDAlQgYE6jmDmQkAEAlqAAQlpAAkBkAg");
	this.shape.setTransform(87.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.1,175);


// stage content:
(lib.未命名1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 7
	this.instance = new lib.orange("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(138.6,170.4,1,1,4.7,0,0,87.5,87.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.text = new cjs.Text("Production", "25px 'Century Gothic'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(137.9,155.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance},{t:this.text}]},10).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},10).wait(82));

	// 圖層 6
	this.instance_1 = new lib.orange("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.4,341,1,1,4.7,0,0,87.5,87.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.text_1 = new cjs.Text("Test", "25px 'Century Gothic'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 26;
	this.text_1.parent = this;
	this.text_1.setTransform(102.4,326.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_1},{t:this.text_1}]},10).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},10).wait(92));

	// 圖層 5
	this.instance_2 = new lib.orange("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(209.3,479.3,1,1,4.7,0,0,87.5,87.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.text_2 = new cjs.Text("Implement", "25px 'Century Gothic'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 26;
	this.text_2.parent = this;
	this.text_2.setTransform(208.4,466.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2},{t:this.text_2}]},10).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({alpha:1},10).wait(102));

	// 圖層 4
	this.instance_3 = new lib.orange("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(383.4,485.6,1,1,4.7,0,0,87.5,87.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.text_3 = new cjs.Text("Visual\nDesign", "25px 'Century Gothic'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 26;
	this.text_3.parent = this;
	this.text_3.setTransform(383.3,456.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_3},{t:this.text_3}]},9).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({alpha:1},9).wait(112));

	// 圖層 3
	this.instance_4 = new lib.orange("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(487.4,344.7,1,1,4.7,0,0,87.5,87.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.text_4 = new cjs.Text("Mock up", "25px 'Century Gothic'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 32;
	this.text_4.parent = this;
	this.text_4.setTransform(487.6,329.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_4},{t:this.text_4}]},11).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},11).wait(121));

	// 圖層 2
	this.instance_5 = new lib.orange("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(457.5,172.8,1,1,4.7,0,0,87.5,87.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.text_5 = new cjs.Text("Research", "25px 'Century Gothic'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 32;
	this.text_5.parent = this;
	this.text_5.setTransform(458.6,158.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5},{t:this.text_5}]},10).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({alpha:1},10).wait(132));

	// 圖層 1
	this.instance_6 = new lib.orange("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(298.5,98.9,1,1,4.7,0,0,87.5,87.5);
	this.instance_6.alpha = 0;

	this.text_6 = new cjs.Text("Idea", "25px 'Century Gothic'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 32;
	this.text_6.parent = this;
	this.text_6.setTransform(298.5,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6},{t:this.text_6}]},9).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9).wait(142));

	// 圖層 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7941D").s().p("AgpCCQgVgNgRggIAYgOQAYAtAfAAQANABAMgHQAMgGAHgLQAGgLAAgMQAAgOgJgNQgNgSghgZQghgZgJgLQgOgUAAgWQAAgRAIgPQAJgPAQgJQAPgIAQAAQATAAARAKQARAKASAZIgVARQgQgVgLgGQgKgHgOABQgOAAgLAKQgKAJAAAPQAAAJAEAIQADAJAKAJIAiAcQAjAYANAVQAOAUAAAUQAAAegXAWQgXAWggAAQgXAAgUgNg");
	this.shape.setTransform(369.5,298.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7941D").s().p("AgpCCQgUgNgRggIAWgOQAZAtAfAAQANABAMgHQAMgGAGgLQAHgLAAgMQAAgOgJgNQgOgSgfgZQgjgZgIgLQgOgUAAgWQAAgRAIgPQAJgPAPgJQAQgIAQAAQAUAAAQAKQARAKATAZIgXARQgPgVgLgGQgKgHgNABQgPAAgKAKQgLAJAAAPQAAAJADAIQAEAJAKAJIAhAcQAkAYANAVQANAUAAAUQAAAegWAWQgXAWggAAQgXAAgUgNg");
	this.shape_1.setTransform(350.5,298.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7941D").s().p("AhNCIIAAkPICbAAIAAAbIiAAAIAABWIB+AAIAAAYIh+AAIAABsIB+AAIAAAag");
	this.shape_2.setTransform(332.8,298.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7941D").s().p("AhhBfQgjgoAAg3QAAg8AqgpQAqgpA9AAQAnAAAfAPQAeAPAUAcIgWAQQgRgXgagMQgZgMgdAAQgfAAgbAQQgdAPgOAbQgQAaAAAfQAAAyAiAiQAjAhAxAAQA6AAAmgtIAWAQQgUAagfAPQgeAOgmAAQhGAAgpgwg");
	this.shape_3.setTransform(306.2,298.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7941D").s().p("AhlBmQgpgqAAg8QAAgkATgiQATgiAhgSQAggUAnAAQA8AAApApQArAqAAA7QAAA8grApQgpAqg8AAQg7AAgqgpgAg5hkQgbAQgPAbQgPAaAAAfQAAAxAiAiQAiAhAuAAQAeAAAbgPQAcgQAPgaQAPgbAAggQAAgfgPgaQgPgbgcgQQgcgQgdAAQgdAAgcAQg");
	this.shape_4.setTransform(274.2,298.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7941D").s().p("AA1CIIhgh/IgQAAIAAB/IgbAAIAAkPIA2AAQAsAAAQAEQAYAGAPARQAQATAAAbQAAAWgKARQgLARgTAGQgUAJggAAIBgB/gAg7gQIAvABQAaAAANgFQANgGAHgLQAIgMAAgOQAAgNgIgMQgHgKgMgFQgMgFgbAAIgwAAg");
	this.shape_5.setTransform(246.9,298.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7941D").s().p("AhUCIIAAkPIA3AAQAsAAARAEQAXAGAPASQAPASAAAbQAAAbgPASQgOARgaAFQgSAEgxAAIgTAAIAAB/gAg4gQIAuABQAaAAANgFQANgFAHgMQAIgLAAgOQAAgOgIgMQgHgKgMgFQgNgFgZAAIgwAAg");
	this.shape_6.setTransform(224,298.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(501,308.8,185.1,311.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;