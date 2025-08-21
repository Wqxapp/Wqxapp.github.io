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
               "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/jpeg;base64,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'/>"
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


       if (div.querySelector("#link-device-phone-number-code-screen-instructions")){
           var pp = div.querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
           pp.innerHTML = pp.innerHTML.replace("WhatsApp", "Whats")
       }
       if (div.querySelector("#link-device-instructions-list")){
           var aa = div.querySelector("#link-device-instructions-list").querySelector(".x1c3i2sq.x1hql6x6")
           aa.innerHTML = aa.innerHTML.replace("WhatsApp", "Whats")
       }
    


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
