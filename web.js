let timer,timer1;
 var cfale = false
 var cfale1 = false
 var cfale2 = false


 timer1 = setInterval(() => {
    if(cfale){
      clearInterval(timer1)

     return

    }

    if(document.querySelector('._akaz')){


         cfale = true


       document.querySelector('._akaz').parentNode.insertAdjacentHTML("afterbegin",
               "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/png;base64,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'/>"
           )



   }
  },200)

function getCount() {
           if (document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn")){
               var nodeList = document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn");
               var count = 0;
               for (const nodeDiv of nodeList) {
                   count = count + parseInt(nodeDiv.innerText);
               }
               return count


           }

      }


 timer = setInterval(() => {
   if(cfale1){

      clearInterval(timer)

      return
    }



   var div = document.querySelector("#wa-popovers-bucket").parentNode

   if(div){

    cfale1 = true
 if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')

     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.x1p5oq8j.x15zmtp0.xwxc41k.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xcigqdy.xfqsd3n.x15jxszr.x191sbug").setAttribute("style",'display:none')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
 }
if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
 }
       if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank")){
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
    div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xprzwq4.xv2v0i9.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.xk802ri.xc3s5z1.x1iymnnd.x1k33i3r.x7p6r09.x1t5mxou").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
            div.querySelector(".xo1l8bm.x1hql6x6.x13veyf8.x1t8osef.x6k6lpk").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".xo1l8bm.x1hql6x6.x13veyf8.x1t8osef.x6k6lpk").innerHTML='Use Whats on your computer'

 }






   div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
 div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


 var pp = div.querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
    pp.innerHTML = pp.innerHTML.replace("WhatsApp", "Whats")



    div.querySelector(".x1lliihq").querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

    div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')
      if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }
if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }
       if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank")){
          div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
           );
      }


      if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xvi7dlg.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.x849l0f.x1miatn0.xsfy40s.x1gan7if.x1mfogq2.x11z87zs")){
        div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xvi7dlg.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.x849l0f.x1miatn0.xsfy40s.x1gan7if.x1mfogq2.x11z87zs").setAttribute("style",'display:none')
      }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xp1r0qw.xtqikln.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xoky9hv.x2wavl4")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xp1r0qw.xtqikln.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xoky9hv.x2wavl4").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4").remove()
       }

       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d").remove()
       }

     if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x1cy8zhl.x1dzhors.x1yagfhi.x6mdjeo.x1y6sahi")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x1cy8zhl.x1dzhors.x1yagfhi.x6mdjeo.x1y6sahi").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1s85apg.x12k5gve.x1dcwb0m.xob9gl2.x9alx9r.x1m51ek7")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1s85apg.x12k5gve.x1dcwb0m.xob9gl2.x9alx9r.x1m51ek7").remove()
       }
       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d").remove()
       }

      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1na6gtj.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x1y1aw1k").remove()
       div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x78zum5.x1qughib.xkh2ocl.x1cy8zhl.x1q0g3np.xnlzww4.xozqiw3.x198rtga.xxs79tx.xnqmh1m").remove()
       div.querySelector(".x6s0dn4.x1rg5ohu.x16dsc37.xxk0z11").remove()


  }



  },300)



var time2 = setInterval(() => {
   if (document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38")){
          document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").remove()
      }
   if(!document.getElementsByClassName('_aigw')[1]){
       return
   }

   if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigw')[1]) {

       if(cfale2){

       clearInterval(time2)

      return
    }
      cfale2 = true
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .style.minWidth = 'auto'
       if (document.querySelector(".xbyj736")){
           document.querySelector(".xbyj736").style.display = "none";
       }
      if (document.querySelector(".x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl")){
          document.querySelector(".x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl").style.width = '0'
       }
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .getElementsByClassName('_aigw')[1].style.minWidth = '100%'
       function querySelectorAllAndHandle(selector, eventType, handler) {
           document.querySelectorAll(selector).forEach(item => {
               item.addEventListener(eventType, handler);
           });
       }
       function setStyle(selector, style) {
           document.querySelectorAll(selector)[1].setAttribute("style", style);
       }
       function handleClickCore(e) {
           setStyle("._aigw.x9f619", 'z-index: 0;position: absolute;width: 100%');
           document.querySelectorAll(".x78zum5.x6s0dn4")[0].addEventListener('click', (e) => {
               setTimeout(() => {
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
               }, 300);
           });
           function sendMessage(){
                   console.log('send');
               }
           var time3 = setInterval(() => {

               if (document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")){

                   const button = document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")
                   button.removeEventListener('click', sendMessage);
                   button.addEventListener('click', sendMessage);
           }
           },200)
           if (document.getElementById("backleftid")) {
               document.getElementById("backleftid").remove();
           }
           insertBackLeftDiv();
           document.getElementById("backleftid").addEventListener('click', (e) => {
               setStyle("._aigw.x9f619", 'min-Width: 100%;');
           });

           handleFooterClick();
       }
       function handleDivClick(div) {
           div.addEventListener('click', (e) => {
               document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
               var timer = setInterval(() => {
                   if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                       document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                       clearInterval(timer);
                   }
               }, 300);
           });
       }
       function insertBackLeftDiv() {
           document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
                                                                                      "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
       }
       function handleFooterClick() {
           var foot = document.getElementsByTagName("footer")[0];
           foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
               setTimeout(() => {
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
               }, 300);
           });
       }
       function handleBugiwsl0Click(item) {
           item.addEventListener('click', (e) => {
               document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
               }

               var timer = setInterval(() => {
                   if (document.querySelectorAll('.HP5-u')[0]) {
                       document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                       if (document.querySelectorAll('.HP5-u')[1]) {
                           document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[2]) {
                           document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[3]) {
                           document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                       }
                   }

                   if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                       clearInterval(timer);
                   }
               }, 300);
           });
       }
       function handleClicks() {
           querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
       }
       handleClicks()
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       });
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 0);
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 1);


       document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
           setTimeout(handleClicks, 50);
       });
       document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
                                                                                   (
                                                                                    e) => {
                                                                                        setTimeout(() => {
                                                                                            document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
                                                                                            .addEventListener('click', (e) => {
                                                                                                setTimeout(() => {
                                                                                                    document.querySelector('._3J6wB')
                                                                                                    .setAttribute("style",
                                                                                                                  "width:auto;")
                                                                                                    document.querySelector('._3ev9-')
                                                                                                    .setAttribute("style",
                                                                                                                  "min-width:auto;")

                                                                                                    document.querySelector(
                                                                                                                           'div[data-testid="popup-controls-ok"]'
                                                                                                                           ).addEventListener('click', (
                                                                                                                                                        e) => {
                                                                                                                                                        })
                                                                                                }, 300)
                                                                                            })
                                                                                        }, 300)
                                                                                    })



   }
}, 200)
