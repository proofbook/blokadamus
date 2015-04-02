// Garden Gnome Software - Skin
// Pano2VR pro 4.5.0/10633
// Filename: blogadamus.ggsk
// Generated Вт 31. мар 13:15:09 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-200 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-63 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -200px;';
		hs+='top:  -63px;';
		hs+='width: 286px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.svg';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.svg';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.svg';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.svg';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'images/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'images/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin__text.innerHTML="\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white__text=document.createElement('div');
		this._tt_zoomin_white.className='ggskin ggskin_textdiv';
		this._tt_zoomin_white.ggTextDiv=this._tt_zoomin_white__text;
		this._tt_zoomin_white.ggId="tt_zoomin_white";
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		this._tt_zoomin_white.className='ggskin ggskin_text';
		this._tt_zoomin_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_zoomin_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white__text.setAttribute('style',hs);
		this._tt_zoomin_white__text.innerHTML="\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435";
		this._tt_zoomin_white.appendChild(this._tt_zoomin_white__text);
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'images/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'images/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout__text.innerHTML="\u0423\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white__text=document.createElement('div');
		this._tt_zoomout_white.className='ggskin ggskin_textdiv';
		this._tt_zoomout_white.ggTextDiv=this._tt_zoomout_white__text;
		this._tt_zoomout_white.ggId="tt_zoomout_white";
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		this._tt_zoomout_white.className='ggskin ggskin_text';
		this._tt_zoomout_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_zoomout_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white__text.setAttribute('style',hs);
		this._tt_zoomout_white__text.innerHTML="\u0423\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435";
		this._tt_zoomout_white.appendChild(this._tt_zoomout_white__text);
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'images/autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'images/autorotate.svg';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		this._tt_autorotate.ggType='text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate__text.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		this._tt_autorotate_white=document.createElement('div');
		this._tt_autorotate_white__text=document.createElement('div');
		this._tt_autorotate_white.className='ggskin ggskin_textdiv';
		this._tt_autorotate_white.ggTextDiv=this._tt_autorotate_white__text;
		this._tt_autorotate_white.ggId="tt_autorotate_white";
		this._tt_autorotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate_white.ggVisible=true;
		this._tt_autorotate_white.className='ggskin ggskin_text';
		this._tt_autorotate_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_autorotate_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate_white__text.setAttribute('style',hs);
		this._tt_autorotate_white__text.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435";
		this._tt_autorotate_white.appendChild(this._tt_autorotate_white__text);
		this._tt_autorotate.appendChild(this._tt_autorotate_white);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg';
		this._info.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.onclick=function () {
			flag=(me._userdata.style.visibility=='hidden');
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=flag?'inherit':'hidden';
			me._userdata.ggVisible=flag;
		}
		this._info.onmouseover=function () {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='inherit';
			me._tt_info.ggVisible=true;
			me._info__img.src=basePath + 'images/info__o.svg';
		}
		this._info.onmouseout=function () {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me._info__img.src=basePath + 'images/info.svg';
		}
		this._tt_info=document.createElement('div');
		this._tt_info__text=document.createElement('div');
		this._tt_info.className='ggskin ggskin_textdiv';
		this._tt_info.ggTextDiv=this._tt_info__text;
		this._tt_info.ggId="tt_info";
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		this._tt_info.className='ggskin ggskin_text';
		this._tt_info.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_info.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info__text.setAttribute('style',hs);
		this._tt_info__text.innerHTML="\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f";
		this._tt_info.appendChild(this._tt_info__text);
		this._tt_info_white=document.createElement('div');
		this._tt_info_white__text=document.createElement('div');
		this._tt_info_white.className='ggskin ggskin_textdiv';
		this._tt_info_white.ggTextDiv=this._tt_info_white__text;
		this._tt_info_white.ggId="tt_info_white";
		this._tt_info_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white.ggVisible=true;
		this._tt_info_white.className='ggskin ggskin_text';
		this._tt_info_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_info_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white__text.setAttribute('style',hs);
		this._tt_info_white__text.innerHTML="\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f";
		this._tt_info_white.appendChild(this._tt_info_white__text);
		this._tt_info.appendChild(this._tt_info_white);
		this._info.appendChild(this._tt_info);
		this._controller.appendChild(this._info);
		this._movemode=document.createElement('div');
		this._movemode.ggId="movemode";
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		this._movemode.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 220px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.className='ggskin ggskin_svg';
		this._movemode__img.setAttribute('src',basePath + 'images/movemode.svg');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='inherit';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.src=basePath + 'images/movemode__o.svg';
		}
		this._movemode.onmouseout=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.src=basePath + 'images/movemode.svg';
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode__text=document.createElement('div');
		this._tt_movemode.className='ggskin ggskin_textdiv';
		this._tt_movemode.ggTextDiv=this._tt_movemode__text;
		this._tt_movemode.ggId="tt_movemode";
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		this._tt_movemode.className='ggskin ggskin_text';
		this._tt_movemode.ggType='text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_movemode.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode__text.setAttribute('style',hs);
		this._tt_movemode__text.innerHTML="\u0420\u0435\u0436\u0438\u043c \u043a\u0443\u0440\u0441\u043e\u0440\u0430";
		this._tt_movemode.appendChild(this._tt_movemode__text);
		this._tt_movemode_white=document.createElement('div');
		this._tt_movemode_white__text=document.createElement('div');
		this._tt_movemode_white.className='ggskin ggskin_textdiv';
		this._tt_movemode_white.ggTextDiv=this._tt_movemode_white__text;
		this._tt_movemode_white.ggId="tt_movemode_white";
		this._tt_movemode_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode_white.ggVisible=true;
		this._tt_movemode_white.className='ggskin ggskin_text';
		this._tt_movemode_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_movemode_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode_white__text.setAttribute('style',hs);
		this._tt_movemode_white__text.innerHTML="\u0420\u0435\u0436\u0438\u043c \u043a\u0443\u0440\u0441\u043e\u0440\u0430";
		this._tt_movemode_white.appendChild(this._tt_movemode_white__text);
		this._tt_movemode.appendChild(this._tt_movemode_white);
		this._movemode.appendChild(this._tt_movemode);
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.svg';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen__text.innerHTML="\u0412\u043e \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text';
		this._tt_fullscreen_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white__text.innerHTML="\u0412\u043e \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-229 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -229px;';
		hs+='top:  148px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<br\/>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container';
		this._userdata.ggType='container';
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle';
		this._userdatabg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -47px;';
		hs+='top:  0px;';
		hs+='width: 400px;';
		hs+='height: 152px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle';
		this._userdatabrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -49px;';
		hs+='top:  -4px;';
		hs+='width: 398px;';
		hs+='height: 154px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text';
		this._title.ggType='text';
		hs ='position:absolute;';
		hs+='left: -11px;';
		hs+='top:  10px;';
		hs+='width: 322px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 322px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.player.userdata.description+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text';
		this._description.ggType='text';
		hs ='position:absolute;';
		hs+='left: -12px;';
		hs+='top:  30px;';
		hs+='width: 324px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._description.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description__text.innerHTML="";
		this._description.appendChild(this._description__text);
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text';
		this._author.ggType='text';
		hs ='position:absolute;';
		hs+='left: -11px;';
		hs+='top:  50px;';
		hs+='width: 322px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._author.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 322px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.player.userdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text';
		this._datetime.ggType='text';
		this._datetime.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (325-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -11px;';
		hs+='top:  70px;';
		hs+='width: 325px;';
		hs+='height: 57px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._datetime.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.player.userdata.source+"<br\/>"+me.player.userdata.comment;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text';
		this._copyright.ggType='text';
		this._copyright.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (325-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -11px;';
		hs+='top:  126px;';
		hs+='width: 325px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._copyright.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.player.userdata.copyright+" , "+me.player.userdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  0px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text';
		this._marker_title.ggType='text';
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: 145px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg';
		this._marker_active.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.svg');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;-webkit-user-drag:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg';
		this._marker_normal.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 140px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.svg');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;-webkit-user-drag:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this.__460=document.createElement('div');
		this.__460.ggId="\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a 46";
		this.__460.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__460.ggVisible=true;
		this.__460.className='ggskin ggskin_rectangle';
		this.__460.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 883px;';
		hs+='top:  592px;';
		hs+='width: 106px;';
		hs+='height: 29px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		this.__460.setAttribute('style',hs);
		this.__460.ondblclick=function () {
			me.player.openUrl("http:\/\/school-134.ru","_blank");
		}
		this.divSkin.appendChild(this.__460);
		this.__46=document.createElement('div');
		this.__46.ggId="\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 46";
		this.__46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__46.ggVisible=true;
		this.__46.className='ggskin ggskin_image';
		this.__46.ggType='image';
		this.__46.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-104 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -104px;';
		hs+='top:  9px;';
		hs+='width: 86px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 100% 0%;';
		hs+='visibility: inherit;';
		this.__46.setAttribute('style',hs);
		this.__46__img=document.createElement('img');
		this.__46__img.className='ggskin ggskin_image';
		this.__46__img.setAttribute('src',basePath + 'images/46.png');
		this.__46__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__46__img.className='ggskin ggskin_image';
		this.__46__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__46__img);
		this.__46.appendChild(this.__46__img);
		this.__46.onclick=function () {
			me.player.openUrl("http:\/\/www.blokadamus.ru\/","_blank");
		}
		this.divSkin.appendChild(this.__46);
		this._map_48=document.createElement('div');
		this._map_48.ggId="map 48";
		this._map_48.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._map_48.ggVisible=true;
		this._map_48.className='ggskin ggskin_container';
		this._map_48.ggType='container';
		this._map_48.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-410 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-180 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -410px;';
		hs+='top:  -180px;';
		hs+='width: 400px;';
		hs+='height: 168px;';
		hs+=cssPrefix + 'transform-origin: 100% 100%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_48.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._map_48.setAttribute('style',hs);
		this._map_48.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._map_48.style[domTransition]='none';
			} else {
				me._map_48.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_48.ggParameter.sx=1.1;me._map_48.ggParameter.sy=1.1;
			me._map_48.style[domTransform]=parameterToTransform(me._map_48.ggParameter);
		}
		this._map_48.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._map_48.style[domTransition]='none';
			} else {
				me._map_48.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_48.ggParameter.sx=0.5;me._map_48.ggParameter.sy=0.5;
			me._map_48.style[domTransform]=parameterToTransform(me._map_48.ggParameter);
		}
		this._scheme=document.createElement('div');
		this._scheme.ggId="scheme";
		this._scheme.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._scheme.ggVisible=true;
		this._scheme.className='ggskin ggskin_image';
		this._scheme.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -1px;';
		hs+='width: 400px;';
		hs+='height: 153px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._scheme.setAttribute('style',hs);
		this._scheme__img=document.createElement('img');
		this._scheme__img.className='ggskin ggskin_image';
		this._scheme__img.setAttribute('src',basePath + 'images/scheme.png');
		this._scheme__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._scheme__img.className='ggskin ggskin_image';
		this._scheme__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._scheme__img);
		this._scheme.appendChild(this._scheme__img);
		this._map_48.appendChild(this._scheme);
		this._geo13=document.createElement('div');
		this._geo13.ggId="geo13";
		this._geo13.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo13.ggVisible=true;
		this._geo13.className='ggskin ggskin_image';
		this._geo13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 207px;';
		hs+='top:  43px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo13.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo13.setAttribute('style',hs);
		this._geo13__img=document.createElement('img');
		this._geo13__img.className='ggskin ggskin_image';
		this._geo13__img.setAttribute('src',basePath + 'images/geo13.png');
		this._geo13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo13__img.className='ggskin ggskin_image';
		this._geo13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo13__img);
		this._geo13.appendChild(this._geo13__img);
		this._geo13.onclick=function () {
			me.player.openNext("{node13}","152\/-2\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=207;me._locate.ggParameter.ry=43;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo13.style[domTransition]='none';
			} else {
				me._geo13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo13.ggParameter.sx=1.1;me._geo13.ggParameter.sy=1.1;
			me._geo13.style[domTransform]=parameterToTransform(me._geo13.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo13.style[domTransition]='none';
			} else {
				me._geo13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo13.style.opacity='1';
			me._geo13.style.visibility=me._geo13.ggVisible?'inherit':'hidden';
		}
		this._geo13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo13.style[domTransition]='none';
			} else {
				me._geo13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo13.ggParameter.sx=0.9;me._geo13.ggParameter.sy=0.9;
			me._geo13.style[domTransform]=parameterToTransform(me._geo13.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo13.style[domTransition]='none';
			} else {
				me._geo13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo13.style.opacity='0.8';
			me._geo13.style.visibility=me._geo13.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo13);
		this._geo12=document.createElement('div');
		this._geo12.ggId="geo12";
		this._geo12.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo12.ggVisible=true;
		this._geo12.className='ggskin ggskin_image';
		this._geo12.ggType='image';
		hs ='position:absolute;';
		hs+='left: 118px;';
		hs+='top:  105px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo12.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo12.setAttribute('style',hs);
		this._geo12__img=document.createElement('img');
		this._geo12__img.className='ggskin ggskin_image';
		this._geo12__img.setAttribute('src',basePath + 'images/geo12.png');
		this._geo12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo12__img.className='ggskin ggskin_image';
		this._geo12__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo12__img);
		this._geo12.appendChild(this._geo12__img);
		this._geo12.onclick=function () {
			me.player.openNext("{node12}","94.5\/-5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=118;me._locate.ggParameter.ry=105;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo12.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo12.style[domTransition]='none';
			} else {
				me._geo12.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo12.ggParameter.sx=1.1;me._geo12.ggParameter.sy=1.1;
			me._geo12.style[domTransform]=parameterToTransform(me._geo12.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo12.style[domTransition]='none';
			} else {
				me._geo12.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo12.style.opacity='1';
			me._geo12.style.visibility=me._geo12.ggVisible?'inherit':'hidden';
		}
		this._geo12.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo12.style[domTransition]='none';
			} else {
				me._geo12.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo12.ggParameter.sx=0.9;me._geo12.ggParameter.sy=0.9;
			me._geo12.style[domTransform]=parameterToTransform(me._geo12.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo12.style[domTransition]='none';
			} else {
				me._geo12.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo12.style.opacity='0.8';
			me._geo12.style.visibility=me._geo12.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo12);
		this._geo11=document.createElement('div');
		this._geo11.ggId="geo11";
		this._geo11.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo11.ggVisible=true;
		this._geo11.className='ggskin ggskin_image';
		this._geo11.ggType='image';
		hs ='position:absolute;';
		hs+='left: 158px;';
		hs+='top:  103px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo11.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo11.setAttribute('style',hs);
		this._geo11__img=document.createElement('img');
		this._geo11__img.className='ggskin ggskin_image';
		this._geo11__img.setAttribute('src',basePath + 'images/geo11.png');
		this._geo11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo11__img.className='ggskin ggskin_image';
		this._geo11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo11__img);
		this._geo11.appendChild(this._geo11__img);
		this._geo11.onclick=function () {
			me.player.openNext("{node11}","187\/-5.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=158;me._locate.ggParameter.ry=103;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo11.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo11.style[domTransition]='none';
			} else {
				me._geo11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo11.ggParameter.sx=1.1;me._geo11.ggParameter.sy=1.1;
			me._geo11.style[domTransform]=parameterToTransform(me._geo11.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo11.style[domTransition]='none';
			} else {
				me._geo11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo11.style.opacity='1';
			me._geo11.style.visibility=me._geo11.ggVisible?'inherit':'hidden';
		}
		this._geo11.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo11.style[domTransition]='none';
			} else {
				me._geo11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo11.ggParameter.sx=0.9;me._geo11.ggParameter.sy=0.9;
			me._geo11.style[domTransform]=parameterToTransform(me._geo11.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo11.style[domTransition]='none';
			} else {
				me._geo11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo11.style.opacity='0.8';
			me._geo11.style.visibility=me._geo11.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo11);
		this._geo10=document.createElement('div');
		this._geo10.ggId="geo10";
		this._geo10.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo10.ggVisible=true;
		this._geo10.className='ggskin ggskin_image';
		this._geo10.ggType='image';
		hs ='position:absolute;';
		hs+='left: 189px;';
		hs+='top:  105px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo10.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo10.setAttribute('style',hs);
		this._geo10__img=document.createElement('img');
		this._geo10__img.className='ggskin ggskin_image';
		this._geo10__img.setAttribute('src',basePath + 'images/geo10.png');
		this._geo10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo10__img.className='ggskin ggskin_image';
		this._geo10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo10__img);
		this._geo10.appendChild(this._geo10__img);
		this._geo10.onclick=function () {
			me.player.openNext("{node10}","178.5\/-5.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=189;me._locate.ggParameter.ry=105;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo10.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo10.style[domTransition]='none';
			} else {
				me._geo10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo10.ggParameter.sx=1.1;me._geo10.ggParameter.sy=1.1;
			me._geo10.style[domTransform]=parameterToTransform(me._geo10.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo10.style[domTransition]='none';
			} else {
				me._geo10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo10.style.opacity='1';
			me._geo10.style.visibility=me._geo10.ggVisible?'inherit':'hidden';
		}
		this._geo10.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo10.style[domTransition]='none';
			} else {
				me._geo10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo10.ggParameter.sx=0.9;me._geo10.ggParameter.sy=0.9;
			me._geo10.style[domTransform]=parameterToTransform(me._geo10.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo10.style[domTransition]='none';
			} else {
				me._geo10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo10.style.opacity='0.8';
			me._geo10.style.visibility=me._geo10.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo10);
		this._geo9=document.createElement('div');
		this._geo9.ggId="geo9";
		this._geo9.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo9.ggVisible=true;
		this._geo9.className='ggskin ggskin_image';
		this._geo9.ggType='image';
		hs ='position:absolute;';
		hs+='left: 233px;';
		hs+='top:  105px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo9.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo9.setAttribute('style',hs);
		this._geo9__img=document.createElement('img');
		this._geo9__img.className='ggskin ggskin_image';
		this._geo9__img.setAttribute('src',basePath + 'images/geo9.png');
		this._geo9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo9__img.className='ggskin ggskin_image';
		this._geo9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo9__img);
		this._geo9.appendChild(this._geo9__img);
		this._geo9.onclick=function () {
			me.player.openNext("{node9}","176.5\/-2.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=233;me._locate.ggParameter.ry=105;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo9.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo9.style[domTransition]='none';
			} else {
				me._geo9.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo9.ggParameter.sx=1.1;me._geo9.ggParameter.sy=1.1;
			me._geo9.style[domTransform]=parameterToTransform(me._geo9.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo9.style[domTransition]='none';
			} else {
				me._geo9.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo9.style.opacity='1';
			me._geo9.style.visibility=me._geo9.ggVisible?'inherit':'hidden';
		}
		this._geo9.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo9.style[domTransition]='none';
			} else {
				me._geo9.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo9.ggParameter.sx=0.9;me._geo9.ggParameter.sy=0.9;
			me._geo9.style[domTransform]=parameterToTransform(me._geo9.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo9.style[domTransition]='none';
			} else {
				me._geo9.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo9.style.opacity='0.8';
			me._geo9.style.visibility=me._geo9.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo9);
		this._geo8=document.createElement('div');
		this._geo8.ggId="geo8";
		this._geo8.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo8.ggVisible=true;
		this._geo8.className='ggskin ggskin_image';
		this._geo8.ggType='image';
		hs ='position:absolute;';
		hs+='left: 297px;';
		hs+='top:  26px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo8.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo8.setAttribute('style',hs);
		this._geo8__img=document.createElement('img');
		this._geo8__img.className='ggskin ggskin_image';
		this._geo8__img.setAttribute('src',basePath + 'images/geo8.png');
		this._geo8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo8__img.className='ggskin ggskin_image';
		this._geo8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo8__img);
		this._geo8.appendChild(this._geo8__img);
		this._geo8.onclick=function () {
			me.player.openNext("{node8}","29.5\/-6\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=297;me._locate.ggParameter.ry=26;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo8.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo8.style[domTransition]='none';
			} else {
				me._geo8.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo8.ggParameter.sx=1.1;me._geo8.ggParameter.sy=1.1;
			me._geo8.style[domTransform]=parameterToTransform(me._geo8.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo8.style[domTransition]='none';
			} else {
				me._geo8.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo8.style.opacity='1';
			me._geo8.style.visibility=me._geo8.ggVisible?'inherit':'hidden';
		}
		this._geo8.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo8.style[domTransition]='none';
			} else {
				me._geo8.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo8.ggParameter.sx=0.9;me._geo8.ggParameter.sy=0.9;
			me._geo8.style[domTransform]=parameterToTransform(me._geo8.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo8.style[domTransition]='none';
			} else {
				me._geo8.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo8.style.opacity='0.8';
			me._geo8.style.visibility=me._geo8.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo8);
		this._geo7=document.createElement('div');
		this._geo7.ggId="geo7";
		this._geo7.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo7.ggVisible=true;
		this._geo7.className='ggskin ggskin_image';
		this._geo7.ggType='image';
		hs ='position:absolute;';
		hs+='left: 315px;';
		hs+='top:  100px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo7.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo7.setAttribute('style',hs);
		this._geo7__img=document.createElement('img');
		this._geo7__img.className='ggskin ggskin_image';
		this._geo7__img.setAttribute('src',basePath + 'images/geo7.png');
		this._geo7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo7__img.className='ggskin ggskin_image';
		this._geo7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo7__img);
		this._geo7.appendChild(this._geo7__img);
		this._geo7.onclick=function () {
			me.player.openNext("{node7}","218.5\/-1.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=315;me._locate.ggParameter.ry=100;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo7.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo7.style[domTransition]='none';
			} else {
				me._geo7.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo7.ggParameter.sx=1.1;me._geo7.ggParameter.sy=1.1;
			me._geo7.style[domTransform]=parameterToTransform(me._geo7.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo7.style[domTransition]='none';
			} else {
				me._geo7.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo7.style.opacity='1';
			me._geo7.style.visibility=me._geo7.ggVisible?'inherit':'hidden';
		}
		this._geo7.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo7.style[domTransition]='none';
			} else {
				me._geo7.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo7.ggParameter.sx=0.9;me._geo7.ggParameter.sy=0.9;
			me._geo7.style[domTransform]=parameterToTransform(me._geo7.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo7.style[domTransition]='none';
			} else {
				me._geo7.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo7.style.opacity='0.8';
			me._geo7.style.visibility=me._geo7.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo7);
		this._geo6=document.createElement('div');
		this._geo6.ggId="geo6";
		this._geo6.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo6.ggVisible=true;
		this._geo6.className='ggskin ggskin_image';
		this._geo6.ggType='image';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  62px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo6.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo6.setAttribute('style',hs);
		this._geo6__img=document.createElement('img');
		this._geo6__img.className='ggskin ggskin_image';
		this._geo6__img.setAttribute('src',basePath + 'images/geo6.png');
		this._geo6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo6__img.className='ggskin ggskin_image';
		this._geo6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo6__img);
		this._geo6.appendChild(this._geo6__img);
		this._geo6.onclick=function () {
			me.player.openNext("{node6}","304\/-1\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=250;me._locate.ggParameter.ry=62;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo6.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo6.style[domTransition]='none';
			} else {
				me._geo6.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo6.ggParameter.sx=1.1;me._geo6.ggParameter.sy=1.1;
			me._geo6.style[domTransform]=parameterToTransform(me._geo6.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo6.style[domTransition]='none';
			} else {
				me._geo6.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo6.style.opacity='1';
			me._geo6.style.visibility=me._geo6.ggVisible?'inherit':'hidden';
		}
		this._geo6.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo6.style[domTransition]='none';
			} else {
				me._geo6.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo6.ggParameter.sx=0.9;me._geo6.ggParameter.sy=0.9;
			me._geo6.style[domTransform]=parameterToTransform(me._geo6.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo6.style[domTransition]='none';
			} else {
				me._geo6.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo6.style.opacity='0.8';
			me._geo6.style.visibility=me._geo6.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo6);
		this._geo5=document.createElement('div');
		this._geo5.ggId="geo5";
		this._geo5.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo5.ggVisible=true;
		this._geo5.className='ggskin ggskin_image';
		this._geo5.ggType='image';
		hs ='position:absolute;';
		hs+='left: 211px;';
		hs+='top:  21px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo5.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo5.setAttribute('style',hs);
		this._geo5__img=document.createElement('img');
		this._geo5__img.className='ggskin ggskin_image';
		this._geo5__img.setAttribute('src',basePath + 'images/geo5.png');
		this._geo5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo5__img.className='ggskin ggskin_image';
		this._geo5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo5__img);
		this._geo5.appendChild(this._geo5__img);
		this._geo5.onclick=function () {
			me.player.openNext("{node5}","30\/-5.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=211;me._locate.ggParameter.ry=21;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo5.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo5.style[domTransition]='none';
			} else {
				me._geo5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo5.ggParameter.sx=1.1;me._geo5.ggParameter.sy=1.1;
			me._geo5.style[domTransform]=parameterToTransform(me._geo5.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo5.style[domTransition]='none';
			} else {
				me._geo5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo5.style.opacity='1';
			me._geo5.style.visibility=me._geo5.ggVisible?'inherit':'hidden';
		}
		this._geo5.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo5.style[domTransition]='none';
			} else {
				me._geo5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo5.ggParameter.sx=0.9;me._geo5.ggParameter.sy=0.9;
			me._geo5.style[domTransform]=parameterToTransform(me._geo5.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo5.style[domTransition]='none';
			} else {
				me._geo5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo5.style.opacity='0.8';
			me._geo5.style.visibility=me._geo5.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo5);
		this._geo4=document.createElement('div');
		this._geo4.ggId="geo4";
		this._geo4.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo4.ggVisible=true;
		this._geo4.className='ggskin ggskin_image';
		this._geo4.ggType='image';
		hs ='position:absolute;';
		hs+='left: 156px;';
		hs+='top:  19px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo4.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo4.setAttribute('style',hs);
		this._geo4__img=document.createElement('img');
		this._geo4__img.className='ggskin ggskin_image';
		this._geo4__img.setAttribute('src',basePath + 'images/geo4.png');
		this._geo4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo4__img.className='ggskin ggskin_image';
		this._geo4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo4__img);
		this._geo4.appendChild(this._geo4__img);
		this._geo4.onclick=function () {
			me.player.openNext("{node4}","241\/-3\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=156;me._locate.ggParameter.ry=19;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo4.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo4.style[domTransition]='none';
			} else {
				me._geo4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo4.ggParameter.sx=1.1;me._geo4.ggParameter.sy=1.1;
			me._geo4.style[domTransform]=parameterToTransform(me._geo4.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo4.style[domTransition]='none';
			} else {
				me._geo4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo4.style.opacity='1';
			me._geo4.style.visibility=me._geo4.ggVisible?'inherit':'hidden';
		}
		this._geo4.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo4.style[domTransition]='none';
			} else {
				me._geo4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo4.ggParameter.sx=0.9;me._geo4.ggParameter.sy=0.9;
			me._geo4.style[domTransform]=parameterToTransform(me._geo4.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo4.style[domTransition]='none';
			} else {
				me._geo4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo4.style.opacity='0.8';
			me._geo4.style.visibility=me._geo4.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo4);
		this._geo3=document.createElement('div');
		this._geo3.ggId="geo3";
		this._geo3.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo3.ggVisible=true;
		this._geo3.className='ggskin ggskin_image';
		this._geo3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 107px;';
		hs+='top:  21px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo3.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo3.setAttribute('style',hs);
		this._geo3__img=document.createElement('img');
		this._geo3__img.className='ggskin ggskin_image';
		this._geo3__img.setAttribute('src',basePath + 'images/geo3.png');
		this._geo3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo3__img.className='ggskin ggskin_image';
		this._geo3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo3__img);
		this._geo3.appendChild(this._geo3__img);
		this._geo3.onclick=function () {
			me.player.openNext("{node3}","187.5\/-5.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=107;me._locate.ggParameter.ry=21;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo3.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo3.style[domTransition]='none';
			} else {
				me._geo3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo3.ggParameter.sx=1.1;me._geo3.ggParameter.sy=1.1;
			me._geo3.style[domTransform]=parameterToTransform(me._geo3.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo3.style[domTransition]='none';
			} else {
				me._geo3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo3.style.opacity='1';
			me._geo3.style.visibility=me._geo3.ggVisible?'inherit':'hidden';
		}
		this._geo3.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo3.style[domTransition]='none';
			} else {
				me._geo3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo3.ggParameter.sx=0.9;me._geo3.ggParameter.sy=0.9;
			me._geo3.style[domTransform]=parameterToTransform(me._geo3.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo3.style[domTransition]='none';
			} else {
				me._geo3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo3.style.opacity='0.8';
			me._geo3.style.visibility=me._geo3.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo3);
		this._geo2=document.createElement('div');
		this._geo2.ggId="geo2";
		this._geo2.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo2.ggVisible=true;
		this._geo2.className='ggskin ggskin_image';
		this._geo2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 75px;';
		hs+='top:  21px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo2.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo2.setAttribute('style',hs);
		this._geo2__img=document.createElement('img');
		this._geo2__img.className='ggskin ggskin_image';
		this._geo2__img.setAttribute('src',basePath + 'images/geo2.png');
		this._geo2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo2__img.className='ggskin ggskin_image';
		this._geo2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo2__img);
		this._geo2.appendChild(this._geo2__img);
		this._geo2.onclick=function () {
			me.player.openNext("{node2}","44.5\/2.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=75;me._locate.ggParameter.ry=21;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo2.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo2.style[domTransition]='none';
			} else {
				me._geo2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo2.ggParameter.sx=1.1;me._geo2.ggParameter.sy=1.1;
			me._geo2.style[domTransform]=parameterToTransform(me._geo2.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo2.style[domTransition]='none';
			} else {
				me._geo2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo2.style.opacity='1';
			me._geo2.style.visibility=me._geo2.ggVisible?'inherit':'hidden';
		}
		this._geo2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo2.style[domTransition]='none';
			} else {
				me._geo2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo2.ggParameter.sx=0.9;me._geo2.ggParameter.sy=0.9;
			me._geo2.style[domTransform]=parameterToTransform(me._geo2.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo2.style[domTransition]='none';
			} else {
				me._geo2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo2.style.opacity='0.8';
			me._geo2.style.visibility=me._geo2.ggVisible?'inherit':'hidden';
		}
		this._map_48.appendChild(this._geo2);
		this._geo1=document.createElement('div');
		this._geo1.ggId="geo1";
		this._geo1.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._geo1.ggVisible=true;
		this._geo1.className='ggskin ggskin_image';
		this._geo1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 39px;';
		hs+='top:  20px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._geo1.ggParameter) + ';';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._geo1.setAttribute('style',hs);
		this._geo1__img=document.createElement('img');
		this._geo1__img.className='ggskin ggskin_image';
		this._geo1__img.setAttribute('src',basePath + 'images/geo1.png');
		this._geo1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._geo1__img.className='ggskin ggskin_image';
		this._geo1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._geo1__img);
		this._geo1.appendChild(this._geo1__img);
		this._geo1.onclick=function () {
			me.player.openNext("{node1}","333\/-0.5\/70");
			if (me.player.transitionsDisabled) {
				me._locate.style[domTransition]='none';
			} else {
				me._locate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._locate.ggParameter.rx=39;me._locate.ggParameter.ry=20;
			me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		}
		this._geo1.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._geo1.style[domTransition]='none';
			} else {
				me._geo1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo1.ggParameter.sx=1.1;me._geo1.ggParameter.sy=1.1;
			me._geo1.style[domTransform]=parameterToTransform(me._geo1.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo1.style[domTransition]='none';
			} else {
				me._geo1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo1.style.opacity='1';
			me._geo1.style.visibility=me._geo1.ggVisible?'inherit':'hidden';
			flag=(me._text_temp_exp.style.visibility=='hidden');
			me._text_temp_exp.style[domTransition]='none';
			me._text_temp_exp.style.visibility=flag?'inherit':'hidden';
			me._text_temp_exp.ggVisible=flag;
		}
		this._geo1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._geo1.style[domTransition]='none';
			} else {
				me._geo1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo1.ggParameter.sx=0.9;me._geo1.ggParameter.sy=0.9;
			me._geo1.style[domTransform]=parameterToTransform(me._geo1.ggParameter);
			if (me.player.transitionsDisabled) {
				me._geo1.style[domTransition]='none';
			} else {
				me._geo1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._geo1.style.opacity='0.8';
			me._geo1.style.visibility=me._geo1.ggVisible?'inherit':'hidden';
			flag=(me._text_temp_exp.style.visibility=='hidden');
			me._text_temp_exp.style[domTransition]='none';
			me._text_temp_exp.style.visibility=flag?'inherit':'hidden';
			me._text_temp_exp.ggVisible=flag;
		}
		this._text_temp_exp=document.createElement('div');
		this._text_temp_exp__text=document.createElement('div');
		this._text_temp_exp.className='ggskin ggskin_textdiv';
		this._text_temp_exp.ggTextDiv=this._text_temp_exp__text;
		this._text_temp_exp.ggId="Text temp exp";
		this._text_temp_exp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_temp_exp.ggVisible=false;
		this._text_temp_exp.className='ggskin ggskin_text';
		this._text_temp_exp.ggType='text';
		hs ='position:absolute;';
		hs+='left: -76px;';
		hs+='top:  14px;';
		hs+='width: 172px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_temp_exp.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: 50px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_temp_exp__text.setAttribute('style',hs);
		this._text_temp_exp__text.innerHTML="\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f <br\/>\u044d\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0438\u044f";
		this._text_temp_exp.appendChild(this._text_temp_exp__text);
		this._geo1.appendChild(this._text_temp_exp);
		this._map_48.appendChild(this._geo1);
		this._locate=document.createElement('div');
		this._locate.ggId="locate";
		this._locate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._locate.ggVisible=true;
		this._locate.className='ggskin ggskin_image';
		this._locate.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 11px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._locate.setAttribute('style',hs);
		this._locate__img=document.createElement('img');
		this._locate__img.className='ggskin ggskin_image';
		this._locate__img.setAttribute('src',basePath + 'images/locate.png');
		this._locate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._locate__img.className='ggskin ggskin_image';
		this._locate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._locate__img);
		this._locate.appendChild(this._locate__img);
		this._map_48.appendChild(this._locate);
		this.divSkin.appendChild(this._map_48);
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=207;me._locate.ggParameter.ry=43;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=118;me._locate.ggParameter.ry=105;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=158;me._locate.ggParameter.ry=103;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=189;me._locate.ggParameter.ry=105;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=233;me._locate.ggParameter.ry=105;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=297;me._locate.ggParameter.ry=26;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=315;me._locate.ggParameter.ry=100;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=250;me._locate.ggParameter.ry=62;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=211;me._locate.ggParameter.ry=21;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=156;me._locate.ggParameter.ry=19;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=107;me._locate.ggParameter.ry=21;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=75;me._locate.ggParameter.ry=21;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		me._locate.style[domTransition]='none';
		me._locate.ggParameter.rx=39;me._locate.ggParameter.ry=20;
		me._locate.style[domTransform]=parameterToTransform(me._locate.ggParameter);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='1') {
			me._geo13.onclick();
		}
		if (id=='1') {
			me._geo12.onclick();
		}
		if (id=='1') {
			me._geo11.onclick();
		}
		if (id=='1') {
			me._geo10.onclick();
		}
		if (id=='1') {
			me._geo9.onclick();
		}
		if (id=='1') {
			me._geo8.onclick();
		}
		if (id=='1') {
			me._geo7.onclick();
		}
		if (id=='1') {
			me._geo6.onclick();
		}
		if (id=='1') {
			me._geo5.onclick();
		}
		if (id=='1') {
			me._geo4.onclick();
		}
		if (id=='1') {
			me._geo3.onclick();
		}
		if (id=='1') {
			me._geo2.onclick();
		}
		if (id=='1') {
			me._geo1.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
		if (id=='1') {
			me._geo13.onmouseover();
		}
		if (id=='1') {
			me._geo12.onmouseover();
		}
		if (id=='1') {
			me._geo11.onmouseover();
		}
		if (id=='1') {
			me._geo10.onmouseover();
		}
		if (id=='1') {
			me._geo9.onmouseover();
		}
		if (id=='1') {
			me._geo8.onmouseover();
		}
		if (id=='1') {
			me._geo7.onmouseover();
		}
		if (id=='1') {
			me._geo6.onmouseover();
		}
		if (id=='1') {
			me._geo5.onmouseover();
		}
		if (id=='1') {
			me._geo4.onmouseover();
		}
		if (id=='1') {
			me._geo3.onmouseover();
		}
		if (id=='1') {
			me._geo2.onmouseover();
		}
		if (id=='1') {
			me._geo1.onmouseover();
		}
	}
	this.hotspotProxyOut=function(id) {
		if (id=='1') {
			me._geo13.onmouseout();
		}
		if (id=='1') {
			me._geo12.onmouseout();
		}
		if (id=='1') {
			me._geo11.onmouseout();
		}
		if (id=='1') {
			me._geo10.onmouseout();
		}
		if (id=='1') {
			me._geo9.onmouseout();
		}
		if (id=='1') {
			me._geo8.onmouseout();
		}
		if (id=='1') {
			me._geo7.onmouseout();
		}
		if (id=='1') {
			me._geo6.onmouseout();
		}
		if (id=='1') {
			me._geo5.onmouseout();
		}
		if (id=='1') {
			me._geo4.onmouseout();
		}
		if (id=='1') {
			me._geo3.onmouseout();
		}
		if (id=='1') {
			me._geo2.onmouseout();
		}
		if (id=='1') {
			me._geo1.onmouseout();
		}
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
		this._marker_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hotspot";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 350px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg';
			this._hsimage.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -17px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this._hsimage.onmouseover=function () {
				me.elementMouseOver['hsimage']=true;
			}
			this._hsimage.onmouseout=function () {
				me._hsimage.style[domTransition]='none';
				me._hsimage.ggParameter.sx=1;me._hsimage.ggParameter.sy=1;
				me._hsimage.style[domTransform]=parameterToTransform(me._hsimage.ggParameter);
				me.elementMouseOver['hsimage']=false;
			}
			this._hsimage.ontouchend=function () {
				me.elementMouseOver['hsimage']=false;
			}
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: 95px;';
			hs+='height: 17px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['hsimage']) {
					me._hsimage.style[domTransition]='none';
					me._hsimage.ggParameter.sx=1.3;me._hsimage.ggParameter.sy=1.3;
					me._hsimage.style[domTransform]=parameterToTransform(me._hsimage.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};
