a=function(){m=Math;var x=function(b){var e=b>=0.3&&b<0.8?(b-0.3)*2:b<0.3?(0.3-b)*2:(1.3-b)*2,c=b>=0.5?(b-0.5)*2:(0.5-b)*2;return"rgb("+m.round((b<0.5?b*2:(1-b)*2)*255)+","+m.round(e*255)+","+m.round(c*255)+")"},j=function(b){for(var e=b.length,c=0,d=0;d<e;d++)c+=b[d];return c/e},r=function(b,e,c,d,n,o,p,q){if(c>1||d>1){c=m.floor(c/2);d=m.floor(d/2);var f=j([n,o,p,q]),g;g=(c+d)/(k+h)*10;g=(m.random()-0.5)*g;f=f+g;if(f<0)f=0;else if(f>1)f=1;g=j([n,o]);var s=j([o,p]),t=j([p,q]),u=j([q,n]);r(b,e,c,d,
n,g,f,u);r(b+c,e,c,d,g,o,s,f);r(b+c,e+d,c,d,f,s,p,t);r(b,e+d,c,d,u,f,t,q)}else l[e][b]=j([n,o,p,q])},w=function(){for(var b=0;b<h;b++)for(var e=0;e<k;e++){v.fillStyle=x(l[b][e]);v.fillRect(e,b,1,1)}setTimeout(function(){for(var c=0;c<h;c++)for(var d=0;d<k;d++){l[c][d]+=0.02;if(l[c][d]>1)l[c][d]=0}w()},50)},i=document.getElementById("c"),v=i.getContext("2d"),k=256,h=256;i.width=k;i.height=h;var l=Array(h);for(i=0;i<h;i++)l[i]=Array(k);r(0,0,k,h,m.random(),m.random(),m.random(),m.random());w()}();
