const patsGifs = [
    {
        name: 'Pat1',
        anime: 'Senpai Ga Uzai Kouhai No Haneshi',
        url: 'https://i.pinimg.com/originals/4c/03/bb/4c03bbe17bc0825e064d049c5f8262f3.gif'
    },
    {
        name: 'Pat2',
        anime: 'Kobayashi-san Chi no Maid Dragon',
        url: 'https://i.gifer.com/fybn.gif'
    },
    {
        name: 'Pat3',
        anime: 'Re Zero',
        url: 'https://gifdb.com/images/high/rem-re-zero-anime-blush-head-pat-97eh0hxn28eoicim.gif'
    },
    {
        name: 'Pat4',
        anime: 'Himouto! Umaru Chan',
        url: 'https://i.pinimg.com/originals/8b/42/6c/8b426c9bedc37054cd7e73925fa10da5.gif'
    },
    {
        name: 'Pat5',
        anime: 'Chuunibyo demo Koi ga Shitai!',
        url: 'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif'
    },
    {
        name: 'Pat6',
        anime: 'Roku de Nashi Majutsu Koushi to Akashic Records',
        url: 'https://64.media.tumblr.com/ece1322461eb696f9d89e0ec438c8dfe/tumblr_oon7fb0LhK1tx45yjo1_540.gif'
    },
    {
        name: 'Pat7',
        anime: 'Oreimo',
        url: 'https://gifdb.com/images/high/anime-hug-oreimo-metrph31hd1ks1wf.gif'
    },
    {
        name: 'Pat8',
        anime: 'K-On',
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d8aa80d-a00f-4ca5-817d-30fbc6bf33be/da1gz1o-d5f7d23d-4fe9-4d3b-a385-84edecd35e7a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkOGFhODBkLWEwMGYtNGNhNS04MTdkLTMwZmJjNmJmMzNiZVwvZGExZ3oxby1kNWY3ZDIzZC00ZmU5LTRkM2ItYTM4NS04NGVkZWNkMzVlN2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TTofOQTVQL_E5p3aCVz-d_GSR6I9ja5FCPgw4xXWfyA'
    },
    {
        name: 'Pat9',
        anime: 'Senpai Ga Uzai Kouhai No Hanashi Futaba',
        url: 'https://i.pinimg.com/originals/4c/03/bb/4c03bbe17bc0825e064d049c5f8262f3.gif'
    },
    {
        name: 'Pat10',
        anime: 'Dog Days',
        url: 'https://media1.tenor.com/m/YaFzR7EkabYAAAAC/head-pat-anime.gif'
    },
    {
        name: 'Pat11',
        anime: 'Kumichou Musuma to Sewagakari',
        url: 'https://gifdb.com/images/high/yakuza-anime-sleeping-with-someone-patting-her-head-ynnrs7hdsolc6nhz.gif'
    },
    {
        name: 'Pat12',
        anime: 'Boku wa Tomodachi ga Sukunai Next',
        url: 'https://img3.saucenao.com/vpc/frame.php?expires=1721156400&auth=km_ORcySpyhxBLLiAoLIlq-ceNc&rsz=0&enc=YW5pbWUvQm9rdSB3YSBUb21vZGFjaGkgZ2EgU3VrdW5haSBORVhUL1tNYXp1aV1fQm9rdV9IYV9Ub21vZGFjaGlfR2FfU3VrdW5haV9ORVhUXy1fMTBfWzI4QjI0MEE3XS5ta3YuMTAxMDEuemlw&sub=20411-31-851267.jpg'
    },
    {
        name: 'Pat13',
        anime: 'Acchi Kocchi',
        url: 'https://i.imgur.com/OSrfHhT.gif'
    },
    {
        name: 'Pat14',
        anime: 'Higurashi no Naku Koro ni Gou',
        url: 'https://64.media.tumblr.com/3818f33ce2ef0ebd6f2ef6e010916adc/422fd797151263cd-89/s540x810/cba423ee82327bff3b214fb3b7df9f966dab94af.gif'
    },
    {
        name: 'Pat15',
        anime: 'Girls und Panzer',
        url: 'https://steamuserimages-a.akamaihd.net/ugc/94973556562549504/FB484462495BB096C407DF60C395CAF20EF7989B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        name: 'Pat16',
        anime: 'Kuzu no Honkai',
        url: 'https://64.media.tumblr.com/1c433aeea03d0fcee34c22696ba1307b/tumblr_osl1kmMWL91qbvovho1_540.gif'
    },
    {
        name: 'Pat17',
        anime: 'Mikakunin de Shinkoukei',
        url: 'https://i.kym-cdn.com/photos/images/newsfeed/000/748/858/74c.gif'
    },
    {
        name: 'Pat18',
        anime: 'Momokuri',
        url: 'https://i.pinimg.com/originals/b5/18/90/b518909216fd793247753ba69d8e94b7.gif'
    },
    {
        name: 'Pat19',
        anime: 'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei',
        url: 'https://i.pinimg.com/originals/a3/81/e7/a381e782b7059cd027e8fd84d35d2786.gif'
    },
    {
        name: 'Pat20',
        anime: 'Kotoura-San',
        url: 'https://image.myanimelist.net/ui/yTX-jtGuycJCaa0Gz6GP_dqwVjZmXciHTQSPpLhWULZb2EKdihtqa78B-U5X2mq3qZofVxn3yt6Woj8nx8LTGbrKcUK--of-iPQfh62rDjVWAmXd122IOUsuzwtya6eTPIVBha3M5lU9CdY5nLTCcg'
    },
    {
        name: 'Pat21',
        anime: 'Gochuumon wa Usagi Desuka??',
        url: 'https://i.kym-cdn.com/photos/images/original/001/039/657/8ff.gif'
    }
    ];
    
    module.exports = patsGifs;
    