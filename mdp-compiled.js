a=function(){m=Math;var x=function(b){var f=b>=0.3&&b<0.8?(b-0.3)*2:b<0.3?(0.3-b)*2:(1.3-b)*2,c=b>=0.5?(b-0.5)*2:(0.5-b)*2;b=[m.round((b<0.5?b*2:(1-b)*2)*255),m.round(f*255),m.round(c*255)];return"rgb("+b[0]+","+b[1]+","+b[2]+")"},j=function(b){for(var f=b.length,c=0,e=0;e<f;e++)c+=b[e];return c/f},r=function(b,f,c,e,k,l,n,o){if(c>1||e>1){c=m.floor(c/2);e=m.floor(e/2);var g=j([k,l,n,o]),i;i=(c+e)/(p+q)*10;i=(m.random()-0.5)*i;g=g+i;if(g<0)g=0;else if(g>1)g=1;i=j([k,l]);var t=j([l,n]),u=j([n,o]),v=
j([o,k]);r(b,f,c,e,k,i,g,v);r(b+c,f,c,e,i,l,t,g);r(b+c,f+e,c,e,g,t,n,u);r(b,f+e,c,e,v,g,u,o)}else s[f][b]=j([k,l,n,o])},d=document.getElementById("canvas"),w=d.getContext("2d"),p=d.width,q=d.height,s=Array(q);for(d=0;d<q;d++){s[d]=Array(p);for(var h=0;h<p;h++)s[d][h]=0}d=m.random();h=m.random();var y=m.random(),z=m.random();r(0,0,p,q,d,h,y,z);for(d=0;d<q;d++)for(h=0;h<p;h++){w.fillStyle=x(s[d][h]);w.fillRect(h,d,1,1)}}();
