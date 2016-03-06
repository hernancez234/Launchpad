var equinoxData = {

    // unique song id
    song_number: 1,
    
    song_name: "Skrillex - Equinox",

    // mappings of sound to key
    mappings:{
        chain1:["c1","a0", "a1", "a2", "a3", "b0", "b1", "b2", "b3", "b3","d8","d12",
                "c3","c5", "a5", "a6", "a7", "b4", "b5", "b6", "b7", "d5","d6","d4",
                "c2","c7", "a9", "a10","a11","b8", "b9", "b10","b11","d1","d0","e0",
                "c6","a12","a13","a14","a15","b12","b13","b14","b15","d3","d2","d1"],
                
        chain2:["a13","a14","a15","c2", "c3", "b0", "b1", "b2", "b3", "b3","d8","d12",
                "c1", "",   "",   "c6", "c7", "b4", "b5", "b6", "b7", "d5","d6","d4",
                "c5", "c8", "c9", "c10","c11","b8", "b9", "b10","b11","d1","d0","d15",
                "e0", "c12","c13","c14","c15","b12","b13","b14","b15","d3","d2","d1"],
                
        chain3:["a0", "e2", "a1","a3", "d0", "d1","d2", "d3", "b0", "b1", "b2", "b3",
                "c3", "e1", "e3","c11","d4", "d5","d6", "d7", "b4", "b5", "b6", "b7",
                "c4", "e0", "e4","c2", "d8", "d9","d10","d11","b8", "b9", "b11","",
                "a12","c15","e5","c1", "d12","c0","d14","d15","b12","b13","b14",""],
                
        chain4:["c0", "c3", "a15","","",   "",   "",   "b15","","","","",
                "c4", "c7", "",   "","",   "",   "d6", "d3", "","","","",
                "c8", "c11","",   "","d12","d13","d14","d7", "","","","",
                "c12","c15","",   "","d8", "d9", "d10","d11","","","",""]
    },
    
    // which keys need to be help to play through
    holdToPlay:{
        chain1:[4,5,6,7,8,9,33,34,41],
        
        chain2:[5,6,7,8,9,33,34,41],
        
        chain3:[],
        
        chain4:[]
    },
    
    // sets of keys that are linked (only one can be playing at a time)
    linkedAreas:{
        chain1:[[0,12,13,24,25,36]],
        
        chain2:[[0,1,2,3,4,12,15,16,24,26,27,28,37,38,39,40]],
        
        chain3:[[4,5,6,7,16,17,18,19,28,29,30,31,40,42,43]],
        
        chain4:[[7,18,19,28,29,30,31,40,41,42,43]]
    },
    
    soundUrls:{
        chain1:{
            a0:"https://www.dropbox.com/s/t4zo7wow4c5fjns/a0.mp3?dl=0",
            a1:"https://www.dropbox.com/s/gaz0eevp6x14crw/a1.mp3?dl=0",
            a2:"https://www.dropbox.com/s/opgw5gjw63j14j9/a2.mp3?dl=0",
            a3:"https://www.dropbox.com/s/h27b0kz0n7hoepd/a3.mp3?dl=0",
            a5:"https://www.dropbox.com/s/mmhnq48k098jdsj/a5.mp3?dl=0",
            a6:"https://www.dropbox.com/s/29x2ujx4qp8dgbm/a6.mp3?dl=0",
            a7:"https://www.dropbox.com/s/gg23wk9f60tyahx/a7.mp3?dl=0",
            a9:"https://www.dropbox.com/s/7apgeoitngigsg7/a9.mp3?dl=0",
            a10:"https://www.dropbox.com/s/69gqnvj1l40vl4k/a10.mp3?dl=0",
            a11:"https://www.dropbox.com/s/sc946smj9viaint/a11.mp3?dl=0",
            a12:"https://www.dropbox.com/s/1ve7a6r1d6jfm3a/a12.mp3?dl=0",
            a13:"https://www.dropbox.com/s/426uh6rdbvtmy65/a13.mp3?dl=0",
            a14:"https://www.dropbox.com/s/1g1i88xxc6lotws/a14.mp3?dl=0",
            a15:"https://www.dropbox.com/s/fxtskyc2z70zru0/a15.mp3?dl=0",
            b0:"https://www.dropbox.com/s/t86xvx4bu0sn6l1/b0.mp3?dl=0",
            b1:"https://www.dropbox.com/s/rnnus99prqglkw9/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/txi1bi0kmvdfry0/b2.mp3?dl=0",
            b3:"https://www.dropbox.com/s/8pu51kgr9lgmmwn/b3.mp3?dl=0",
            b4:"https://www.dropbox.com/s/jh62e9a373anhtx/b4.mp3?dl=0",
            b5:"https://www.dropbox.com/s/iez18zr0pd4rxgr/b5.mp3?dl=0",
            b6:"https://www.dropbox.com/s/aigfb4m7hsj6bpy/b6.mp3?dl=0",
            b7:"https://www.dropbox.com/s/piji1zeu9xgaj62/b7.mp3?dl=0",
            b8:"https://www.dropbox.com/s/zl09ar8y3i3dj16/b8.mp3?dl=0",
            b9:"https://www.dropbox.com/s/a3xubpuy1csm8q8/b9.mp3?dl=0",
            b10:"https://www.dropbox.com/s/0p6lzr2c8zggjd3/b10.mp3?dl=0",
            b11:"https://www.dropbox.com/s/2m87kltgmriql6o/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/r5023hbax35pkhw/b12.mp3?dl=0",
            b13:"https://www.dropbox.com/s/tx4rttgtzt6o5of/b13.mp3?dl=0",
            b14:"https://www.dropbox.com/s/evfdjdc6lo8oywn/b14.mp3?dl=0",
            b15:"https://www.dropbox.com/s/6bmucpuc15f69vb/b15.mp3?dl=0",
            c1:"https://www.dropbox.com/s/vurg6xhak3iqqhn/c1.mp3?dl=0",
            c2:"https://www.dropbox.com/s/xi0tju6ndjksc23/c2.mp3?dl=0",
            c3:"https://www.dropbox.com/s/i2e12p2mz4szlrh/c3.mp3?dl=0",
            c5:"https://www.dropbox.com/s/6paaqkzk28uxze7/c5.mp3?dl=0",
            c6:"https://www.dropbox.com/s/hwv2kiwydqfc8d1/c6.mp3?dl=0",
            c7:"https://www.dropbox.com/s/rzefr6dd48wy0hs/c7.mp3?dl=0",
            d0:"https://www.dropbox.com/s/311gydd57dvaihv/d0.mp3?dl=0",
            d1:"https://www.dropbox.com/s/9gmo3oncvq5tp6w/d1.mp3?dl=0",
            d2:"https://www.dropbox.com/s/fk1hcuyg4nq5o5k/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/dqy4k5fagbfu489/d3.mp3?dl=0",
            d4:"https://www.dropbox.com/s/j2fmgb90ocr6c5y/d4.mp3?dl=0",
            d5:"https://www.dropbox.com/s/8ujquam1d6z94jy/d5.mp3?dl=0",
            d6:"https://www.dropbox.com/s/kbqzj32l34vlxbs/d6.mp3?dl=0",
            d8:"https://www.dropbox.com/s/7kegfqfxhtzjncg/d8.mp3?dl=0",
            d12:"https://www.dropbox.com/s/glwy811g4wx65tz/d12.mp3?dl=0",
            e0:"https://www.dropbox.com/s/ipho422siv97yyj/e0.mp3?dl=0",
            e1:"https://www.dropbox.com/s/uh6f3wpf384a4eu/e1.mp3?dl=0"
        },
        chain2:{
            a13:"https://www.dropbox.com/s/c916l78nw0wdl72/a13.mp3?dl=0",
            a14:"https://www.dropbox.com/s/9s0fo3fdddnq0r5/a14.mp3?dl=0",
            a15:"https://www.dropbox.com/s/mjj74hss633fufy/a15.mp3?dl=0",
            b0:"https://www.dropbox.com/s/t86xvx4bu0sn6l1/b0.mp3?dl=0",
            b1:"https://www.dropbox.com/s/rnnus99prqglkw9/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/txi1bi0kmvdfry0/b2.mp3?dl=0",
            b3:"https://www.dropbox.com/s/8pu51kgr9lgmmwn/b3.mp3?dl=0",
            b4:"https://www.dropbox.com/s/jh62e9a373anhtx/b4.mp3?dl=0",
            b5:"https://www.dropbox.com/s/iez18zr0pd4rxgr/b5.mp3?dl=0",
            b6:"https://www.dropbox.com/s/aigfb4m7hsj6bpy/b6.mp3?dl=0",
            b7:"https://www.dropbox.com/s/piji1zeu9xgaj62/b7.mp3?dl=0",
            b8:"https://www.dropbox.com/s/zl09ar8y3i3dj16/b8.mp3?dl=0",
            b9:"https://www.dropbox.com/s/a3xubpuy1csm8q8/b9.mp3?dl=0",
            b10:"https://www.dropbox.com/s/0p6lzr2c8zggjd3/b10.mp3?dl=0",
            b11:"https://www.dropbox.com/s/2m87kltgmriql6o/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/r5023hbax35pkhw/b12.mp3?dl=0",
            b13:"https://www.dropbox.com/s/tx4rttgtzt6o5of/b13.mp3?dl=0",
            b14:"https://www.dropbox.com/s/evfdjdc6lo8oywn/b14.mp3?dl=0",
            b15:"https://www.dropbox.com/s/6bmucpuc15f69vb/b15.mp3?dl=0",
            c0:"https://www.dropbox.com/s/dpwnoorx0vvarq6/c0.mp3?dl=0",
            c1:"https://www.dropbox.com/s/oa0i0bk6l5xzxdl/c1.mp3?dl=0",
            c2:"https://www.dropbox.com/s/6ou9srjmdlr0up8/c2.mp3?dl=0",
            c3:"https://www.dropbox.com/s/a7wqz3ojjfadycq/c3.mp3?dl=0",
            c4:"https://www.dropbox.com/s/de4qgbkocqrc0ra/c4.mp3?dl=0",
            c5:"https://www.dropbox.com/s/w7cmh09z9wnbex3/c5.mp3?dl=0",
            c6:"https://www.dropbox.com/s/ufag5z70ws8gtpd/c6.mp3?dl=0",
            c7:"https://www.dropbox.com/s/mcgt1gmkpyv40r7/c7.mp3?dl=0",
            c8:"https://www.dropbox.com/s/jhxzpmdsqkqy5wt/c8.mp3?dl=0",
            c9:"https://www.dropbox.com/s/c1pjaq7akkl9ecs/c9.mp3?dl=0",
            c10:"https://www.dropbox.com/s/9o507y682l7bomy/c10.mp3?dl=0",
            c11:"https://www.dropbox.com/s/armkbsmljhrd519/c11.mp3?dl=0",
            c12:"https://www.dropbox.com/s/sa4oif3j8ltyask/c12.mp3?dl=0",
            c13:"https://www.dropbox.com/s/j4kvyiqo1pzfrq9/c13.mp3?dl=0",
            c14:"https://www.dropbox.com/s/qhjmulcuevi05s8/c14.mp3?dl=0",
            c15:"https://www.dropbox.com/s/ylgdobq1bsxlzd4/c15.mp3?dl=0",
            d0:"https://www.dropbox.com/s/311gydd57dvaihv/d0.mp3?dl=0",
            d1:"https://www.dropbox.com/s/9gmo3oncvq5tp6w/d1.mp3?dl=0",
            d2:"https://www.dropbox.com/s/fk1hcuyg4nq5o5k/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/dqy4k5fagbfu489/d3.mp3?dl=0",
            d4:"https://www.dropbox.com/s/j2fmgb90ocr6c5y/d4.mp3?dl=0",
            d5:"https://www.dropbox.com/s/8ujquam1d6z94jy/d5.mp3?dl=0",
            d6:"https://www.dropbox.com/s/kbqzj32l34vlxbs/d6.mp3?dl=0",
            d8:"https://www.dropbox.com/s/7kegfqfxhtzjncg/d8.mp3?dl=0",
            d12:"https://www.dropbox.com/s/glwy811g4wx65tz/d12.mp3?dl=0",
            d15:"https://www.dropbox.com/s/6o6y53frnv6pbjl/d15.mp3?dl=0",
            e0:"https://www.dropbox.com/s/u1v0kf2lejtla6u/e0.mp3?dl=0"
        },
        chain3:{
            a0:"https://www.dropbox.com/s/xrzv7cjc4qatb4x/a0.mp3?dl=0",
            a1:"https://www.dropbox.com/s/zckqut5marr56po/a1.mp3?dl=0",
            a3:"https://www.dropbox.com/s/bs5h0mr9ra62wf6/a3.mp3?dl=0",
            a5:"https://www.dropbox.com/s/9rs0hoiqrbakteu/a5.mp3?dl=0",
            a6:"https://www.dropbox.com/s/pqteyxo22adyl6m/a6.mp3?dl=0",
            a7:"https://www.dropbox.com/s/cxyj46br80hxcyd/a7.mp3?dl=0",
            a9:"https://www.dropbox.com/s/7nnvixyehsjzt86/a9.mp3?dl=0",
            a10:"https://www.dropbox.com/s/2zprjtilh00ux03/a10.mp3?dl=0",
            a11:"https://www.dropbox.com/s/m1cdz2mohdgro09/a11.mp3?dl=0",
            a12:"https://www.dropbox.com/s/hbu1prnp8ayuz2b/a12.mp3?dl=0",
            a13:"https://www.dropbox.com/s/wz8fsv0pz9bafsh/a13.mp3?dl=0",
            a14:"https://www.dropbox.com/s/0unpp9wknsi3wus/a14.mp3?dl=0",
            a15:"https://www.dropbox.com/s/lyhi0u1wuozodr3/a15.mp3?dl=0",
            b0:"https://www.dropbox.com/s/tf5c7hgqld9u1mh/b0.mp3?dl=0",
            b1:"https://www.dropbox.com/s/m0uz3ik9maocadp/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/blednjx7qf8v10u/b2.mp3?dl=0",
            b3:"https://www.dropbox.com/s/ncads6gmenk6ujd/b3.mp3?dl=0",
            b4:"https://www.dropbox.com/s/6mdpgoc2hjjnmz2/b4.mp3?dl=0",
            b5:"https://www.dropbox.com/s/g7bmpbni1nhac6g/b5.mp3?dl=0",
            b6:"https://www.dropbox.com/s/3ikl168ias9k6no/b6.mp3?dl=0",
            b7:"https://www.dropbox.com/s/gznuv0ulhswx6n8/b7.mp3?dl=0",
            b8:"https://www.dropbox.com/s/yc62i8d7eogzxtn/b8.mp3?dl=0",
            b9:"https://www.dropbox.com/s/gip1vily0w99d1z/b9.mp3?dl=0",
            b11:"https://www.dropbox.com/s/3z5eg0ycllcma1p/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/v4hasn87edgjs1w/b12.mp3?dl=0",
            b13:"https://www.dropbox.com/s/t2oevvfl5m9fg8q/b13.mp3?dl=0",
            b14:"https://www.dropbox.com/s/wwhr64uj5yscn1l/b14.mp3?dl=0",
            c0:"https://www.dropbox.com/s/7yo7euvqosobc0v/c0.mp3?dl=0",
            c1:"https://www.dropbox.com/s/hcnjnd6se31r9cs/c1.mp3?dl=0",
            c2:"https://www.dropbox.com/s/lhvvbu7ntit09zm/c2.mp3?dl=0",
            c3:"https://www.dropbox.com/s/1m65agetd9bthie/c3.mp3?dl=0",
            c4:"https://www.dropbox.com/s/vez8z10h9dcmza9/c4.mp3?dl=0",
            c5:"https://www.dropbox.com/s/zoq1rg8z9lu79me/c5.mp3?dl=0",
            c6:"https://www.dropbox.com/s/qksjk0i1rv9khem/c6.mp3?dl=0",
            c7:"https://www.dropbox.com/s/khh7hjx1lt4rhgq/c7.mp3?dl=0",
            c8:"https://www.dropbox.com/s/cmq6zjef26sygia/c8.mp3?dl=0",
            c9:"https://www.dropbox.com/s/m6muojo9segri0z/c9.mp3?dl=0",
            c10:"https://www.dropbox.com/s/7uxxqkmpnd7iop2/c10.mp3?dl=0",
            c11:"https://www.dropbox.com/s/dhpx17if2pry90w/c11.mp3?dl=0",
            c12:"https://www.dropbox.com/s/277pcjt9ktm5ze2/c12.mp3?dl=0",
            c13:"https://www.dropbox.com/s/xm9i1yhd2n1bot0/c13.mp3?dl=0",
            c14:"https://www.dropbox.com/s/hernwbtr7fz7803/c14.mp3?dl=0",
            c15:"https://www.dropbox.com/s/wi0casze5jfy5n3/c15.mp3?dl=0",
            d0:"https://www.dropbox.com/s/730xzx02fle7930/d0.mp3?dl=0",
            d1:"https://www.dropbox.com/s/9kzpxi7kt4rnbkf/d1.mp3?dl=0",
            d2:"https://www.dropbox.com/s/f92fuqwklenarab/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/ejbchn8sy3lzugv/d3.mp3?dl=0",
            d4:"https://www.dropbox.com/s/9k7o9f03aku43ad/d4.mp3?dl=0",
            d5:"https://www.dropbox.com/s/6m1ra1735jt15gj/d5.mp3?dl=0",
            d6:"https://www.dropbox.com/s/0qilqkgdcj6y8to/d6.mp3?dl=0",
            d7:"https://www.dropbox.com/s/dlgwusxgalfq6hd/d7.mp3?dl=0",
            d8:"https://www.dropbox.com/s/dqf9t39ktqvaywd/d8.mp3?dl=0",
            d9:"https://www.dropbox.com/s/y47kxcg8r5yyexe/d9.mp3?dl=0",
            d10:"https://www.dropbox.com/s/d6nvogj1do1so1c/d10.mp3?dl=0",
            d11:"https://www.dropbox.com/s/s6duf4kae36pzem/d11.mp3?dl=0",
            d12:"https://www.dropbox.com/s/agid175vzv7o3mf/d12.mp3?dl=0",
            d14:"https://www.dropbox.com/s/1zphahp05946ju2/d14.mp3?dl=0",
            d15:"https://www.dropbox.com/s/w44qs4dh3iylp1u/d15.mp3?dl=0",
            e0:"https://www.dropbox.com/s/9yt0ktfjeenr6xi/e0.mp3?dl=0",
            e1:"https://www.dropbox.com/s/3nk1ahwi03xhj9u/e1.mp3?dl=0", 
            e2:"https://www.dropbox.com/s/fu3hfm1c214k0fr/e2.mp3?dl=0",
            e3:"https://www.dropbox.com/s/pa2297az84sr0hr/e3.mp3?dl=0",
            e4:"https://www.dropbox.com/s/puowe41hgyhb47g/e4.mp3?dl=0",
            e5:"https://www.dropbox.com/s/83h2jl1k0faku4z/e5.mp3?dl=0"
        },
        chain4:{
            a15:"https://www.dropbox.com/s/38694xpi1ag3yy4/a15.mp3?dl=0",
            b15:"https://www.dropbox.com/s/xbn14pkye284ktd/b15.mp3?dl=0",
            c0:"https://www.dropbox.com/s/937hi4fvsajmwuy/c0.mp3?dl=0",
            c3:"https://www.dropbox.com/s/bhv5snhez2a9wmb/c3.mp3?dl=0",
            c4:"https://www.dropbox.com/s/dxipq50c1flzyuy/c4.mp3?dl=0",
            c7:"https://www.dropbox.com/s/rbktumus28i1e4i/c7.mp3?dl=0",
            c8:"https://www.dropbox.com/s/detlld88gxbztwo/c8.mp3?dl=0",
            c11:"https://www.dropbox.com/s/vgvxsvbrx7s4oqh/c11.mp3?dl=0",
            c12:"https://www.dropbox.com/s/00inmaez8nm7uwj/c12.mp3?dl=0",
            c15:"https://www.dropbox.com/s/99zseospav9dnmc/c15.mp3?dl=0",
            d3:"https://www.dropbox.com/s/nrb20q7gfzzukcf/d3.mp3?dl=0",
            d6:"https://www.dropbox.com/s/h1gpsn0in02lx1i/d6.mp3?dl=0",
            d7:"https://www.dropbox.com/s/bgm5o9rjig2spfd/d7.mp3?dl=0",
            d8:"https://www.dropbox.com/s/it7ioqx0r5kocup/d8.mp3?dl=0",
            d9:"https://www.dropbox.com/s/rg2lxmzwsasn0v9/d9.mp3?dl=0",
            d10:"https://www.dropbox.com/s/nka2di71uhhhwa8/d10.mp3?dl=0",
            d11:"https://www.dropbox.com/s/itaa9y9glutk8an/d11.mp3?dl=0",
            d12:"https://www.dropbox.com/s/6gu006lx4oqycer/d12.mp3?dl=0",
            d13:"https://www.dropbox.com/s/2bszjkm3qp1k9pl/d13.mp3?dl=0",
            d14:"https://www.dropbox.com/s/s9wfjwdlzj11wi8/d14.mp3?dl=0"
        }
    }
}