	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'SHOW_TOP']])
Z([[7],[3,'SHOW_MODAL']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'awardsConfig']],[3,'awards']])
Z([3,'key'])
Z([[2,'=='],[[6],[[6],[[7],[3,'awardsConfig']],[3,'awards']],[3,'length']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'height:100%;width:100%;'])
Z([[7],[3,'awardsConfig']])
Z([3,'getAwards'])
Z([3,'getData'])
Z([3,'startZhuan'])
Z([3,'zhuanpan'])
Z([[7],[3,'fastJuedin']])
Z(z[5])
Z([[7],[3,'musicflg']])
Z([[7],[3,'repeat']])
Z([[7],[3,'size']])
Z([[7],[3,'xiaojuedingArr']])
Z(z[11])
Z([3,'key'])
Z([[2,'&&'],[[2,'<'],[[7],[3,'index']],[1,3]],[[7],[3,'share']]])
Z([[2,'!'],[[7],[3,'share']]])
Z([3,'handleCancelDialog'])
Z([3,'handleConfirmDialog'])
Z([3,'取消'])
Z([3,'确定'])
Z([[7],[3,'s_awards']])
Z([3,'result'])
Z(z[20])
Z([3,'请确认资产项目信息'])
Z([[7],[3,'saveFrameFlag']])
Z([[7],[3,'showCanvasFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/dialog/dialog.wxml','./components/result/result.wxml','./components/weplug-add-tips/index.wxml','./components/zhuanpan/zhuanpan.wxml','./pages/ceshi/ceshi.wxml','./pages/discover/discover.wxml','./pages/edit/edit.wxml','./pages/index/index.wxml','./pages/list/list.wxml','./pages/set/set.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_v()
_(r,oD)
if(_oz(z,0,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(r,fE)
if(_oz(z,1,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_v()
_(r,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,2,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,0,oH,e,s,gg,hG,'item','index','key')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cT=_n('view')
_rz(z,cT,'style',0,e,s,gg)
var oV=_mz(z,'zhuanpan',['awardsConfig',1,'bind:myAwards',1,'bind:myData',2,'bind:startZhuan',3,'class',4,'fastJuedin',5,'id',6,'musicflg',7,'repeat',8,'size',9,'zhuanpanArr',10],[],e,s,gg)
_(cT,oV)
var cW=_v()
_(cT,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_v()
_(t1,b3)
if(_oz(z,14,aZ,lY,gg)){b3.wxVkey=1
}
b3.wxXCkey=1
return t1
}
cW.wxXCkey=2
_2z(z,12,oX,e,s,gg,cW,'item','index','key')
var hU=_v()
_(cT,hU)
if(_oz(z,15,e,s,gg)){hU.wxVkey=1
}
var o4=_mz(z,'result',['bind:cancel',16,'bind:confirm',1,'cancelText',2,'confirmText',3,'content',4,'id',5,'result',6,'title',7],[],e,s,gg)
_(cT,o4)
var x5=_n('add-tips')
_(cT,x5)
hU.wxXCkey=1
_(r,cT)
var oR=_v()
_(r,oR)
if(_oz(z,24,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(r,fS)
if(_oz(z,25,e,s,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/dialog/dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/dialog/dialog.wxml'] = [$gwx, './components/dialog/dialog.wxml'];else __wxAppCode__['components/dialog/dialog.wxml'] = $gwx( './components/dialog/dialog.wxml' );
		__wxAppCode__['components/result/result.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/result/result.wxml'] = [$gwx, './components/result/result.wxml'];else __wxAppCode__['components/result/result.wxml'] = $gwx( './components/result/result.wxml' );
		__wxAppCode__['components/weplug-add-tips/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/weplug-add-tips/index.wxml'] = [$gwx, './components/weplug-add-tips/index.wxml'];else __wxAppCode__['components/weplug-add-tips/index.wxml'] = $gwx( './components/weplug-add-tips/index.wxml' );
		__wxAppCode__['components/zhuanpan/zhuanpan.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/zhuanpan/zhuanpan.wxml'] = [$gwx, './components/zhuanpan/zhuanpan.wxml'];else __wxAppCode__['components/zhuanpan/zhuanpan.wxml'] = $gwx( './components/zhuanpan/zhuanpan.wxml' );
		__wxAppCode__['pages/ceshi/ceshi.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ceshi/ceshi.wxml'] = [$gwx, './pages/ceshi/ceshi.wxml'];else __wxAppCode__['pages/ceshi/ceshi.wxml'] = $gwx( './pages/ceshi/ceshi.wxml' );
		__wxAppCode__['pages/discover/discover.json'] = {"navigationBarTitleText":"发现","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/discover/discover.wxml'] = [$gwx, './pages/discover/discover.wxml'];else __wxAppCode__['pages/discover/discover.wxml'] = $gwx( './pages/discover/discover.wxml' );
		__wxAppCode__['pages/edit/edit.json'] = {"navigationBarTitleText":"编辑","backgroundColor":"#ffffff","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/edit/edit.wxml'] = [$gwx, './pages/edit/edit.wxml'];else __wxAppCode__['pages/edit/edit.wxml'] = $gwx( './pages/edit/edit.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"navigationBarTitleText":"来做决定啦","backgroundColor":"#ffffff","usingComponents":{"result":"/components/result/result","zhuanpan":"/components/zhuanpan/zhuanpan","add-tips":"/components/weplug-add-tips/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/list/list.json'] = {"navigationBarTitleText":"决定","backgroundColor":"#ffffff","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/list/list.wxml'] = [$gwx, './pages/list/list.wxml'];else __wxAppCode__['pages/list/list.wxml'] = $gwx( './pages/list/list.wxml' );
		__wxAppCode__['pages/set/set.json'] = {"navigationBarTitleText":"设置","backgroundColor":"#efefef","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/set/set.wxml'] = [$gwx, './pages/set/set.wxml'];else __wxAppCode__['pages/set/set.wxml'] = $gwx( './pages/set/set.wxml' );
	
	define("config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={}; 
 			}); 
		define("constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={securityUrl:"op=onlogin",loginUrl:"op=getUserInfo",uploadScore:"op=score",rankUrl:"op=total",rankZhili:"op=getTop",getShareInfo:"op=getShareInfo",getConfig:"op=config",getQuestion:"op=idiom",getHighestScore:"op=highscore",coin:"op=coin",role:"op=game_rule",music:"op=music_hb",help:"op=help",uploadPrize:"op=gift",mygift:"op=mygift",prizeRole:"op=gift_info",getPayStatus:"op=payStatus",payConfig:"op=payconfig",form:"op=form",ban:"op=ban",getDajiaQuestion:"op=dajia",getZhiliQuestion:"op=zhili",auth:{manager:"0",normal:"1"}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return(t=t.toString())[1]?t:"0"+t}function e(){for(var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],e="",n=0;n<32;n++)e+=t[parseInt(61*Math.random())];return e}module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),a=e.getHours(),u=e.getMinutes(),g=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[a,u,g].map(t).join(":")},randomJudgeDo:function(t){var e=Math.floor(Math.random()*t)+1;return console.log("====randomJudgeDo==="+t+"|"+e),e==t},getRandomCode:e,getRandomNum:e,isNull:function(t){return null==t||void 0==t||""==t},getDays:function(t,e){var n,r;n=t.split("-"),r=e.split("-");var o=new Date(n[0],n[1]-1,n[2]),a=new Date(r[0],r[1]-1,r[2]);return parseInt(Math.abs(o-a)/1e3/60/60/24)},dateToString:function(t){var e=t.getFullYear(),n=(t.getMonth()+1).toString(),r=t.getDate().toString();return 1==n.length&&(n="0"+n),1==r.length&&(r="0"+r),e+"-"+n+"-"+r},formatDate:function(e){return[e.getFullYear(),e.getMonth()+1,e.getDate()].map(t).join("-")}}; 
 			}); 
		define("utils/xiaojueding.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=[{id:0,option:"真心话大冒险之真心话",awards:[{name:"描述经历过最尴尬的事",color:"#83ecc6"},{name:"今天穿什么颜色的内裤",color:"#ec807a"},{name:"第一次啪啪啪几岁",color:"#9beaea"},{name:"做过最疯狂的事是什么",color:"#f8e4ad"},{name:"单身的感觉好吗",color:"#5dcbc7"},{name:"你被绿过吗",color:"#e4d571"},{name:"打过几次分手炮",color:"#7ecad8"},{name:"上一次啪啪啪是什么时候",color:"#d2718c"},{name:"你出轨过么",color:"#73cac3"},{name:"多久没看书了",color:"#6cb1d5"}]},{id:1,option:"真心话大冒险之大冒险",awards:[{name:"大声喊 我是猪 我真的是猪",color:"#83ecc6"},{name:"搭讪一个陌生人",color:"#ec807a"},{name:"做个性感的表情或动作",color:"#9beaea"},{name:"任选个异性夸赞一分钟",color:"#f8e4ad"},{name:"对着杯子表白一分钟",color:"#5dcbc7"},{name:"打电话给异性说晚安",color:"#e4d571"},{name:"大声唱首儿歌",color:"#7ecad8"}]},{id:2,option:"下个节日让我男票给我买什么礼物？",awards:[{name:"SixGod香水",color:"#83ecc6"},{name:"狗粮",color:"#ec807a"},{name:"YSL52号口红",color:"#9beaea"},{name:"AJ1篮球鞋",color:"#f8e4ad"},{name:"香奈儿包包",color:"#5dcbc7"},{name:"验孕棒",color:"#e4d571"},{name:"有没有男票心里没点数",color:"#7ecad8"},{name:"SK-ll神仙水",color:"#d2718c"}]},{id:3,option:"今天中午吃什么？",awards:[{name:"黄焖鸡米饭",color:"#83ecc6"},{name:"牛肉拉面",color:"#ec807a"},{name:"自己多少斤心里没点数",color:"#9beaea"},{name:"水饺",color:"#f8e4ad"},{name:"蛋炒饭",color:"#5dcbc7"},{name:"兰州拉面",color:"#e4d571"},{name:"沙县小吃",color:"#7ecad8"},{name:"烤肉饭",color:"#d2718c"},{name:"米线",color:"#73cac3"}]},{id:4,option:"抽取狼人杀身份牌",awards:[{index:0,name:"预言家",color:"#83ecc6"},{index:1,name:"狼人",color:"#ec807a"},{index:2,name:"村民",color:"#FFC928"},{index:3,name:"狼人",color:"#9beaea"},{index:4,name:"村民",color:"#f8e4ad"},{index:5,name:"狼人",color:"#5dcbc7"},{index:6,name:"村民",color:"#e4d571"},{index:7,name:"狼人",color:"#7ecad8"},{index:8,name:"村民",color:"#d2718c"},{index:9,name:"猎人",color:"#73cac3"},{index:10,name:"女巫",color:"#6cb1d5"},{index:11,name:"丘比特",color:"#864284"},{index:12,name:"白痴",color:"#efb5a4"}]},{id:5,option:"是什么激励我努力上班？",awards:[{name:"穷",color:"#83ecc6"},{name:"为了房子",color:"#ec807a"},{name:"穷",color:"#9beaea"},{name:"为了男人",color:"#f8e4ad"},{name:"穷",color:"#5dcbc7"},{name:"为了女人",color:"#e4d571"},{name:"穷",color:"#7ecad8"},{name:"为了孩子",color:"#d2718c"}]},{id:6,option:"明天约会去干点啥？",awards:[{name:"看个电影",color:"#83ecc6"},{name:"去游乐场玩",color:"#ec807a"},{name:"一起打台球",color:"#9beaea"},{name:"小吃街吃一圈",color:"#f8e4ad"},{name:"一起去爬山",color:"#5dcbc7"},{name:"看个展览",color:"#e4d571"},{name:"学习做陶艺",color:"#7ecad8"},{name:"玩密室逃脱",color:"#d2718c"}]},{id:7,option:"周末做什么好？",awards:[{name:"逛街",color:"#83ecc6"},{name:"睡觉",color:"#ec807a"},{name:"吃大餐",color:"#9beaea"},{name:"约会",color:"#f8e4ad"},{name:"看电影",color:"#5dcbc7"},{name:"游乐场",color:"#e4d571"},{name:"爬山",color:"#7ecad8"},{name:"健身房",color:"#d2718c"}]},{id:8,option:"十一国庆去哪玩",awards:[{name:"凤凰古城",color:"#83ecc6"},{name:"张家界",color:"#ec807a"},{name:"乌镇",color:"#9beaea"},{name:"鼓浪屿",color:"#f8e4ad"},{name:"千岛湖",color:"#5dcbc7"},{name:"稻城",color:"#e4d571"},{name:"大理",color:"#7ecad8"},{name:"丽江",color:"#d2718c"}]},{id:9,option:"谁去食堂带饭？",awards:[{name:"老大",color:"#83ecc6"},{name:"老二",color:"#ec807a"},{name:"老三",color:"#9beaea"},{name:"老四",color:"#f8e4ad"},{name:"老五",color:"#5dcbc7"},{name:"老六",color:"#e4d571"}]}]; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({onLaunch:function(e){this.globalData.scene=e.scene,1011!=e.scene&&1012!=e.scene&&1013!=e.scene||(this.globalData.fromCodeFlag=!0),console.log("=============app.onlaunch===============");var o=wx.getStorageSync("logs")||[];o.unshift(Date.now()),wx.setStorageSync("logs",o)},onHide:function(){wx.pauseBackgroundAudio()},onShow:function(e){console.log("=============app.onShow==============="),null!=e.shareTicket&&""!=e.shareTicket&&void 0!=e.shareTicket&&(this.globalData.shareTicket=e.shareTicket),console.log("-=====app.globalData.shareTicket:"+this.globalData.shareTicket+"|ops.shareTickets:"+e.shareTicket),"true"==wx.getStorageSync("ban")&&wx.reLaunch({url:"/pages/index/index?closeFlag=1"})},getUserInfo:function(e){},getHeighestScore:function(e){this.globalData.heighestScore=wx.getStorageSync("heighestScore"),"function"==typeof e&&e(this.globalData.heighestScore)},globalData:{userInfo:null,heighestScore:0,systemInfo:null,zhuan:0}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/dialog/dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/dialog/dialog.js';	define("components/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{multipleSlots:!0},properties:{myProperty:{type:String,value:"",observer:function(t,e,i){}},title:{type:String,value:"标题"},content:{type:String,value:"弹窗内容"},cancelText:{type:String,value:"取消"},confirmText:{type:String,value:"确定"}},data:{isShow:!1},attached:function(){},methods:{hideDialog:function(){this.setData({isShow:!this.data.isShow})},showDialog:function(){this.setData({isShow:!this.data.isShow})},_cancelEvent:function(){this.triggerEvent("cancelEvent")},_confirmEvent:function(){this.triggerEvent("confirmEvent")}}}); 
 			}); 	require("components/dialog/dialog.js");
 		__wxRoute = 'components/result/result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/result/result.js';	define("components/result/result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{title:{type:String,value:"请确认提交信息"},content:{type:Array},result:{type:String,value:"**"},confirmText:{type:String,value:"确定"},cancelText:{type:String,value:"取消"}},data:{showDialog:!1},methods:{show:function(){this.setData({showDialog:!0})},hide:function(){this.setData({showDialog:!1})},_cancel:function(){this.triggerEvent("cancel")},_confirm:function(){this.triggerEvent("confirm")}}}); 
 			}); 	require("components/result/result.js");
 		__wxRoute = 'components/weplug-add-tips/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/weplug-add-tips/index.js';	define("components/weplug-add-tips/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{text:{type:String,value:"点击「添加小程序」，下次访问更便捷"},duration:{type:Number,value:6}},data:{SHOW_TOP:!1,SHOW_MODAL:!1},ready:function(){var t=this;wx.getStorageSync("PLUG-ADD-MYAPP-KEY")||(this.setData({SHOW_TOP:!0}),setTimeout(function(){t.setData({SHOW_TOP:!1})},1e3*this.data.duration))},methods:{showModal:function(){this.setData({SHOW_TOP:!1,SHOW_MODAL:!0})},okHandler:function(){this.setData({SHOW_MODAL:!1}),wx.setStorage({key:"PLUG-ADD-MYAPP-KEY",data:+new Date})}}}); 
 			}); 	require("components/weplug-add-tips/index.js");
 		__wxRoute = 'components/zhuanpan/zhuanpan';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/zhuanpan/zhuanpan.js';	define("components/zhuanpan/zhuanpan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=wx.createInnerAudioContext(),t=wx.createInnerAudioContext(),e=wx.createInnerAudioContext(),n=getApp(),o=null;Component({options:{multipleSlots:!0},properties:{myProperty:{type:String,value:"",observer:function(a,t,e){}},probability:{type:Boolean,value:!1},musicflg:{type:Boolean,value:!0},fastJuedin:{type:Boolean,value:!1},repeat:{type:Boolean,value:!1},size:{type:Object,value:{w:659,h:660}},zhuanpanArr:{type:Array,value:[{id:0,option:"转盘的标题名称",awards:[{id:0,name:"最多17个选项",color:"red",probability:0},{id:1,name:"选项最多填13字",color:"green",probability:0}]}]},awardsConfig:{type:Object,value:{option:"我的小决定？",awards:[{id:0,name:"最多17个选项",color:"red",probability:0},{id:1,name:"选项最多填13字",color:"green",probability:0}]}}},data:{animationData:{},zhuanflg:!1,fastTime:7600,slowTime:3900,block1:"block",block2:"none",block3:"none",block4:"none"},created:function(){console.log("==========created==========")},attached:function(){console.log("==========attached=========="),a.src="https://6465-decidecatcloud-ty1p2-1300990487.tcb.qcloud.la/start.mp3?sign=01546fece10657a49d60a462a33ee6f1&t=1578019078",t.src="https://6465-decidecatcloud-ty1p2-1300990487.tcb.qcloud.la/mid.mp3?sign=cec94bae51f5d753f78e037c452f070a&t=1578019126",e.src="https://6465-decidecatcloud-ty1p2-1300990487.tcb.qcloud.la/stop.mp3?sign=7815739b97e40d1a7e1d76d642a8011c&t=1578019142",this.setData({awardsConfig:this.data.zhuanpanArr[0]}),this.initAdards()},methods:{isNull:function(a){return null==a||void 0==a||""==a},initAdards:function(){for(var a=this,t=a.data.awardsConfig,e=t.awards.length,n=1/e,o=360/e,r=o-90,i=0;i<e;i++)t.awards[i].item2Deg=i*o+90-o/2+"deg",t.awards[i].afterDeg=r+"deg";a.setData({turnNum:n,awardsConfig:t}),a._change()},reset:function(){var a=this,t=a.data.awardsConfig;console.log(t);var e=wx.createAnimation({duration:1,timingFunction:"linear"});a.animation=e,e.rotate(0).step(),n.runDegs=0,a.setData({animationData:e.export(),block4:"block"});for(var o in t.awards)t.awards[o].opacity="1";setTimeout(function(){a.setData({block1:"block",block2:"none",block3:"none",block4:"none",awardsConfig:t}),a._myAwards(!0)},300)},switchZhuanpan:function(n,r){this.setData({awardsConfig:n,block1:"block",block3:"none",zhuanflg:!1}),this.initAdards(),r&&(this.reset(),clearTimeout(o),a.stop(),t.stop(),e.stop(),wx.removeStorageSync("repeatArr"))},_zhuan:function(){var r=this,i=r.data.awardsConfig,s=Math.random()*i.awards.length>>>0;r.data.repeat?s=r._queryRepeat(s):(wx.removeStorageSync("repeatArr"),console.log("是否开启了概率？？？",r.data.probability),r.data.probability&&(s=r._openProbability())),console.log("当前答案选项的下标==",s),setTimeout(function(){r.data.musicflg&&(r.data.fastJuedin?t.play():a.play()),n.runDegs=n.runDegs||0,n.runDegs=n.runDegs+(360-n.runDegs%360)+(2160-s*(360/i.awards.length));var e=wx.createAnimation({duration:r.data.fastJuedin?r.data.slowTime:r.data.fastTime,timingFunction:"ease"});r.animation=e,e.rotate(n.runDegs).step(),0==s&&(n.runDegs=0),r.setData({animationData:e.export(),block1:"none",block2:"block",block3:"none",zhuanflg:!0}),r._setatZhuan(!0)},100),o=setTimeout(function(){for(var a in i.awards)i.awards[a].opacity=a!=s?"0.7":"1";r.data.musicflg&&e.play(),r.setData({animationData:{},s_awards:i.awards[s].name,awardsConfig:i,block1:"none",block2:"none",block3:"block",zhuanflg:!1}),r._myAwards(!1),r._setatZhuan(!1)},r.data.fastJuedin?r.data.slowTime:r.data.fastTime)},_openProbability:function(){var a=this.data.awardsConfig.awards,t=[];for(var e in a)if(0!=a[e].probability)for(var n=0;n<a[e].probability;n++)t.push(e);return t[Math.floor(Math.random()*t.length)]},_queryRepeat:function(a){var t=this,e=!0,n=wx.getStorageSync("repeatArr"),o=[],r=t.data.awardsConfig;if(t.isNull(n))return o.push(a),wx.setStorageSync("repeatArr",o),a;var i=r.awards.length,a=Math.random()*i>>>0;for(var s in n)if(a==n[s])return e=!1,n.length==i?(wx.removeStorageSync("repeatArr"),o.push(a),wx.setStorageSync("repeatArr",o),a):t._queryRepeat();return e?(n.push(a),wx.setStorageSync("repeatArr",n),a):void 0},_change:function(){this.triggerEvent("myData",this.data.awardsConfig)},_myAwards:function(a){this.triggerEvent("myAwards",{s_awards:this.data.s_awards,end:a})},_setatZhuan:function(a){this.triggerEvent("startZhuan",a)}}}); 
 			}); 	require("components/zhuanpan/zhuanpan.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../utils/util.js"),e=getApp(),t=require("../../utils/xiaojueding.js");wx.setStorageSync("all",t),wx.setStorageSync("num",100);var n={data:{size:{w:600,h:600},musicflg:!0,fastJuedin:!1,repeat:!1,xiaojuedingArr:t.sort(function(a,e){return Math.random()>.5?-1:1}),s_awards:"🐾  ▒▒▒▒  🐾",share:!0,canvasWidth:400,canvasHeight:650,showCanvasFlag:!1,colorArr:["#83ecc6","#ec807a","#9beaea","#66BB6A","#f8e4ad","#5dcbc7","#e4d571","#7ecad8","#d2718c","#73cac3","#6cb1d5","#864284","#efb5a4","#ec81a6","#e6ada1","#f8e4ad","#83ecc6","#ec807a","#9beaea","#f8e4ad","#5dcbc7","#e4d571","#7ecad8","#d2718c","#73cac3","#6cb1d5","#864284","#efb5a4","#ec81a6","#e6ada1","#f8e4ad"],fontArr:["italic","oblique","normal"],sizeArr:[12,14,16,18,20,22,24,26,28],eweimaUrl:"../../images/erweima1.jpg",shengchengUrl:"",saveFrameFlag:!1},getData:function(a){this.setData({awardsConfig:a.detail})},getAwards:function(a){var e=this;console.log("结果 "+a.detail.s_awards),this.setData({s_awards:a.detail.end?"🐾  ▒▒▒▒  🐾":a.detail.s_awards,share:!!a.detail.end}),console.log("结果 "+this.data.s_awards),console.log("旋转结果 "+a.detail+"  "+a.detail.end),a.detail.end||setTimeout(function(){e.result.show()},100)},startZhuan:function(a){this.setData({zhuanflg:!!a.detail})},onReady:function(){this.result=this.selectComponent("#result")},onLoad:function(a){console.log("=========onload============"),this.zhuanpan=this.selectComponent("#zhuanpan")},handleCancelDialog:function(){this.dialog.hide()},xiaojueding:function(a){var e=this,t=a.currentTarget.dataset.idx,n=e.data.xiaojuedingArr;if(!e.data.zhuanflg)for(var s in n)if(t==s&&n[s].option!=e.data.awardsConfig.option)return void e.zhuanpan.switchZhuanpan(n[s])},onShow:function(t){console.log("============onShow============");var n=this,s=wx.getStorageSync("switchTab"),i=wx.getStorageSync("all"),o=n.data.xiaojuedingArr;i=e.globalData.defaultJueding?o:e.globalData.myJueding?i:o,n.setData({musicflg:!e.globalData.musicflg,fastJuedin:!!e.globalData.juedin,repeat:!!e.globalData.repeat}),a.isNull(s)||(wx.showLoading({title:"加载中"}),s="00"==s?"0":s,setTimeout(function(){for(var a in i)if(i[a].id==s){n.zhuanpan.switchZhuanpan(i[a],!0),n.setData({zhuanflg:!1});break}wx.hideLoading()},500))},closeSaveFrame:function(){var a=this;a.zhuanpan.reset(),a.setData({saveFrameFlag:!1})},saveImage:function(){var a=this.data.shengchengUrl;wx.saveImageToPhotosAlbum({filePath:a,success:function(a){wx.showToast({title:"保存图片成功！",icon:"none",duration:1e3,mask:!0})}})},generate:function(){wx.showLoading({title:"正在生成中"});var a=this;a.setData({showCanvasFlag:!0});for(var e=[],t=0;t<a.data.awardsConfig.awards.length;t++)e.push(a.data.awardsConfig.awards[t].name);a.makeImageCanvas("shareCanvas",a.data.awardsConfig.option,e,a.data.colorArr,a.data.fontArr,a.data.sizeArr,600,20,20,40,a.data.canvasWidth,a.data.canvasHeight,120,400,a.data.eweimaUrl),setTimeout(function(){wx.canvasToTempFilePath({x:0,y:0,width:a.data.canvasWidth,height:a.data.canvasHeight,canvasId:"shareCanvas",success:function(e){console.log(e.tempFilePath),a.setData({showCanvasFlag:!1,saveFrameFlag:!0,shengchengUrl:e.tempFilePath}),wx.hideLoading()}})},2e3)},onShareAppMessage:function(){return mta.Event.stat("share",{time:"1"}),Math.floor(4*Math.random()+1),{title:a.isNull(e.globalData.shareTitle)?"一起来玩'"+e.globalData.title+"'吧":e.globalData.shareTitle,path:"/pages/index/index",success:function(a){console.log("成功进入分享==========",a)},fail:function(a){console.log("进入分享失败==========",a)}}},makeImageCanvas:function(a,e,t,n,s,i,o,l,r,d,c,h,g,u,f){for(var v=this,w=[],m=0;m<o;m++){var p=v.arrayRandomTakeOne(t);w.push(p)}var x=wx.createCanvasContext(a);x.clearRect(0,0,c,h),x.setFillStyle("white"),x.fillRect(0,0,c,h);for(var b=[],A=0;A<w.length;A++){var C=parseInt(A/l)+1,D=A%l,T=n[A],S=v.arrayRandomTakeOne(s),y=v.arrayRandomTakeOne(i);b.push(y);var F=0,z=C*d;if(0==D)F=0;else if(D>0){for(var j=1;j<D+1;j++)F+=w[A-j].length*b[A-j];F+=r*D}x.fillStyle=T,x.font=S+" small-caps normal "+y+"px Arial",x.fillText(w[A],F,z)}x.setFillStyle("white"),x.fillRect((c-g)/2,(h-u)/2,g,u);for(var I=[],k=0;k<e.length;k++)I.push(e[k]);var R=u-10-g,M=parseInt(R/e.length);M=M>50?50:M;for(var P=0;P<I.length;P++)x.fillStyle="#000000",x.font="normal small-caps normal "+M+"px Arial",x.setTextAlign("center"),x.fillText(I[P],c/2,(h-u)/2+5+M*(P+1));x.drawImage(f,(c-g)/2+5,h-(g+(h-u)/2),g-10,g-10),wx.drawCanvas({canvasId:a,actions:x.getActions()})},arrayRandomTakeOne:function(a){return a[Math.floor(Math.random()*a.length+1-1)]}};Page(n); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/list/list.js';	define("pages/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js"),e=require("../../utils/xiaojueding.js"),a=getApp();Page({data:{xiaojueding:e,myxiaojueding:[],tab_index:1},officialQToKeep:function(e){var a=this,i=e.currentTarget.dataset.index,n=wx.getStorageSync("myJuedin"),o=a.data.xiaojueding,r=!0;n=t.isNull(n)?[]:n;for(var s in o)if(s==i){if(0==n.length)n.push(o[s]),wx.setStorageSync("myJuedin",n),wx.showToast({title:"收藏成功",icon:"success",mask:!1});else{for(var u in n)if(n[u].id==o[s].id){r=!1;break}r&&(n.push(o[s]),wx.setStorageSync("myJuedin",n),wx.showToast({title:"收藏成功",icon:"success",mask:!1}))}break}a.setData({xiaojueding:o})},personalQToDelete:function(t){var e=this,a=t.currentTarget.dataset.index,i=wx.getStorageSync("myJuedin");for(var n in i)if(a==n){i.splice(n,1),wx.showToast({title:"删除成功",icon:"success",mask:!1});break}e.setData({myxiaojueding:i}),wx.setStorageSync("myJuedin",i)},onLoad:function(t){},tabSwitch:function(t){var e=this,a=t.currentTarget.dataset.flg,i=wx.getStorageSync("myJuedin");2==a&&e.setData({myxiaojueding:i}),e.setData({tab_index:1==a?"1":"2"})},addPersonalQ:function(t){wx.navigateTo({url:"../edit/edit?flg=2"})},personalQToRevise:function(t){var e=wx.getStorageSync("myJuedin"),a=t.currentTarget.dataset.index;for(var i in e)if(i==a)return void wx.navigateTo({url:"../edit/edit?item="+JSON.stringify(e[i])})},officialQToRevise:function(t){var e=this.data.xiaojueding,a=t.currentTarget.dataset.index;for(var i in e)if(i==a)return void wx.navigateTo({url:"../edit/edit?flg=1&item="+JSON.stringify(e[i])})},personalQToControl:function(t){var e,a=this,i=t.currentTarget.dataset.index,n=a.data.myxiaojueding;for(var o in n)o==i?(e=void 0==n[o].num1?i:void 0,n[o].num1=e):n[o].num1=void 0;a.setData({myxiaojueding:n})},officialQToControl:function(t){var a,i=this,n=t.currentTarget.dataset.index;for(var o in e)o==n?(a=void 0==e[o].num?n:void 0,e[o].num=a):e[o].num=void 0;i.setData({xiaojueding:e})},officialQToRun:function(t){var e=t.currentTarget.dataset.id;a.globalData.defaultJueding=!0,e=0==e?"00":e,wx.setStorageSync("switchTab",e),wx.switchTab({url:"../index/index"})},personalQToRun:function(t){var e=t.currentTarget.dataset.id;a.globalData.myJueding=!0,wx.setStorageSync("switchTab",e),wx.switchTab({url:"../index/index"})},onShow:function(){console.log("=========onShow============");var e=this,i=wx.getStorageSync("myJuedin");a.globalData.defaultJueding=!1,a.globalData.myJueding=!1,t.isNull(i)||e.setData({myxiaojueding:i}),wx.removeStorageSync("switchTab")},onShareAppMessage:function(){return mta.Event.stat("share",{time:"1"}),Math.floor(4*Math.random()+1),{title:t.isNull(a.globalData.shareTitle)?"一起来玩'"+a.globalData.title+"'吧":a.globalData.shareTitle,path:"/pages/index/index",success:function(t){console.log("成功进入分享==========",t)},fail:function(t){console.log("进入分享失败==========",t)}}}}); 
 			}); 	require("pages/list/list.js");
 		__wxRoute = 'pages/set/set';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/set/set.js';	define("pages/set/set.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../utils/util.js");var t=getApp();Page({data:{custom_sound_default:!0,custom_fast_select_default:!1,custom_no_repetition_select_default:!1,gdhw:[{}]},onLoad:function(t){},switchChangeSound:function(){var a=this,e=a.data.custom_sound_default;t.globalData.musicflg=!t.globalData.musicflg,a.setData({custom_sound_default:!e})},switchChangeFastSelect:function(){var a=this,e=a.data.custom_fast_select_default;t.globalData.juedin=!t.globalData.juedin,a.setData({custom_fast_select_default:!e})},switchChangeNoRepetitionSelect:function(){var a=this,e=a.data.custom_no_repetition_select_default;t.globalData.repeat=!t.globalData.repeat,a.setData({custom_no_repetition_select_default:!e})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/set/set.js");
 		__wxRoute = 'pages/edit/edit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/edit/edit.js';	define("pages/edit/edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js"),a=getApp();Page({data:{input_answer_list:[],default_input_answer_list:{},name:"",flg:0,colorArr:["#83ecc6","#ec807a","#9beaea","#66BB6A","#f8e4ad","#5dcbc7","#e4d571","#7ecad8","#d2718c","#73cac3","#6cb1d5","#864284","#efb5a4","#ec81a6","#e6ada1","#f8e4ad","#83ecc6","#ec807a","#9beaea","#f8e4ad","#5dcbc7","#e4d571","#7ecad8","#d2718c","#73cac3","#6cb1d5","#864284","#efb5a4","#ec81a6","#e6ada1","#f8e4ad"]},onLoad:function(a){var e=this,n={},s=wx.getStorageSync("myJuedin"),i=[],r=(wx.getStorageSync("all"),e.data.default_input_answer_list),o=wx.getStorageSync("num");if(void 0!=a){if(2==a.flg)return r.id=o,r.num=o,void e.setData({default_input_answer_list:r});n=JSON.parse(a.item),1==a.flg&&(t.isNull(s)?(i.push(n),wx.setStorageSync("myJuedin",i)):(s.push(n),wx.setStorageSync("myJuedin",s)),e.setData({flg:1})),e.setData({input_answer_list:n.awards,default_input_answer_list:n,name:n.option})}},checkQuestion:function(t){var a=this,e=t.detail.value,n=a.data.default_input_answer_list;n.option=e,a.setData({name:e,default_input_answer_list:n})},checkAnswer:function(t){var a=this,e=t.detail.value,n=t.currentTarget.dataset.index,s=a.data.input_answer_list,i=a.data.default_input_answer_list;for(var r in s)n==r&&(s[r].name=e);i.awards=s,a.setData({input_answer_list:s,default_input_answer_list:i})},addAnswer:function(){var t=this,a=t.data.input_answer_list,e=t.data.colorArr,n={};17!=a.length?(n={name:"",color:e[a.length]},a.push(n),t.setData({input_answer_list:a})):wx.showToast({title:"选项长度最多17项",icon:"none",mask:!1})},subAnswer:function(t){var a=this,e=t.currentTarget.dataset.index,n=a.data.input_answer_list,s=a.data.default_input_answer_list,i=a.data.colorArr;for(var r in n)if(r==e){n.splice(r,1);break}for(var o in n)n[o].color=i[o];s.awards=n,a.setData({input_answer_list:n,default_input_answer_list:s})},saveQA:function(){var e=this,n=wx.getStorageSync("myJuedin"),s=e.data.default_input_answer_list,i=e.data.input_answer_list,r=wx.getStorageSync("all"),o=[];if(""==e.data.name)wx.showToast({title:"名称不能为空",icon:"none",mask:!1});else{for(var l in i)if(""==i[l].name)return void wx.showToast({title:"选项不能为空",icon:"none",mask:!1});if(i.length<2)return void wx.showToast({title:"选项最少填2个",icon:"none",mask:!1});if(t.isNull(n))return a.globalData.myJueding=!0,o.push(s),wx.setStorageSync("myJuedin",o),wx.setStorageSync("switchTab",s.id),r.push(s),wx.setStorageSync("all",r),wx.setStorageSync("num",wx.getStorageSync("num")+1),void wx.showToast({title:"保存成功",icon:"success",mask:!1,success:function(){setTimeout(function(){wx.switchTab({url:"../index/index"})},1500)}});for(var u in n)if(s.num==n[u].num){n[u]=s,wx.setStorageSync("myJuedin",n);for(var c in r)if(r[c].id==s.id){r[c]=s,wx.setStorageSync("all",r);break}a.globalData.myJueding=!0,wx.setStorageSync("switchTab",s.id),1==e.data.flg&&e.setData({flg:0}),wx.showToast({title:"保存成功",icon:"success",mask:!1,success:function(){setTimeout(function(){wx.switchTab({url:"../index/index"})},1500)}})}else a.globalData.myJueding=!0,wx.setStorageSync("switchTab",s.id),n.push(s),wx.setStorageSync("myJuedin",n),r.push(s),wx.setStorageSync("all",r),wx.setStorageSync("num",wx.getStorageSync("num")+1),wx.showToast({title:"保存成功",icon:"success",mask:!1,success:function(){setTimeout(function(){wx.switchTab({url:"../index/index"})},1500)}})}},onUnload:function(){function t(t){for(var a=[],e={},n=0;n<t.length;n++)e[t[n].id]||(a.push(t[n]),e[t[n].id]=!0);return a}var a=this.data.flg,e=wx.getStorageSync("myJuedin"),n=wx.getStorageSync("all");1==a&&(e.splice(e.length-1,1),wx.setStorageSync("myJuedin",e));var s=t(e),i=t(n);wx.setStorageSync("myJuedin",s),wx.setStorageSync("all",i)},onShareAppMessage:function(){return mta.Event.stat("share",{time:"1"}),Math.floor(4*Math.random()+1),{title:t.isNull(a.globalData.shareTitle)?"一起来玩'"+a.globalData.title+"'吧":a.globalData.shareTitle,path:"/pages/index/index",success:function(t){console.log("成功进入分享==========",t)},fail:function(t){console.log("进入分享失败==========",t)}}}}); 
 			}); 	require("pages/edit/edit.js");
 		__wxRoute = 'pages/ceshi/ceshi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/ceshi/ceshi.js';	define("pages/ceshi/ceshi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=wx.createCanvasContext("canvasI"),e=wx.createCanvasContext("bgCanvas"),s=0;Page({data:{itemsNum:6,itemsArc:0,color:["#FFB932","#ffd57c"],text:["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖"],isRotate:60},start:function(){console.log("start");var t=this,a=t.data.isRotate,e=1e3*Math.random();a=a+e-e%60+1440,console.log(a%360),t.setData({isRotate:a})},onLoad:function(a){var e=this,s=360/e.data.itemsNum;e.setData({itemsArc:s},function(){e.Items(s),t=setInterval(e.light,1e3)})},onReady:function(){this.light()},light:function(){var t=this.data.itemsNum;++s>=2&&(s=0),e.beginPath(),e.arc(150,150,150,0,2*Math.PI),e.setFillStyle("#DF1E14"),e.fill(),e.beginPath(),e.arc(150,150,135,0,2*Math.PI),e.setFillStyle("#F5AD26"),e.fill();for(var a=0;a<2*t;a++)e.save(),e.beginPath(),e.translate(150,150),e.rotate(30*a*Math.PI/180),e.arc(0,-135,8,0,2*Math.PI),0==s?a%2==0?e.setFillStyle("#FBF1A9"):e.setFillStyle("#fbb936"):a%2==0?e.setFillStyle("#fbb936"):e.setFillStyle("#FBF1A9"),e.fill(),e.restore();e.draw()},Items:function(t){console.log(t);for(var e=this,s=t,l=e.data.itemsNum,i=e.data.text,o=0;o<l;o++)a.beginPath(),a.moveTo(125,125),a.arc(125,125,120,s*o*Math.PI/180,(s+s*o)*Math.PI/180),a.closePath(),o%2==0?a.setFillStyle(e.data.color[0]):a.setFillStyle(e.data.color[1]),a.fill(),a.save(),a.beginPath(),a.setFontSize(12),a.setFillStyle("#000"),a.setTextAlign("center"),a.setTextBaseline("middle"),a.translate(125,125),a.rotate(s*(o+2)*Math.PI/180),a.fillText(i[o],0,-90),a.restore();e.Images(),a.draw(!0)},Images:function(){for(var t=this,e=t.data.itemsArc,s=t.data.itemsNum,l=0;l<s;l++)a.save(),a.beginPath(),a.translate(125,125),a.rotate(e*(l+2)*Math.PI/180),a.restore()},onShow:function(){}}); 
 			}); 	require("pages/ceshi/ceshi.js");
 		__wxRoute = 'pages/discover/discover';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/discover/discover.js';	define("pages/discover/discover.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{items:[{appid:"wx6d38f58cf9444e51",img:"../../images/icon_cutenotch.png",title:"Cute Notch",desc:"刘海壁纸制作,给壁纸加上小耳朵"},{appid:"wx886ce37e0790c2e7",img:"../../images/icon_touxiang.png",title:"头像角标制作器",desc:"给你的头像加上VIP、标签等"},{pagePath:"pages/discover/discover",text:"发现",iconPath:"images/tabbar_shezhi.png",selectedIconPath:"images/tabbar_shezhi_select.png"}]},itemClick:function(e){console.log("index--\x3e"+e.currentTarget.id)},onShareAppMessage:function(){}}); 
 			}); 	require("pages/discover/discover.js");
 	