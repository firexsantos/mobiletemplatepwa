document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    // BUILD ITEM
    function buildItem(id, type, length, src, preview, link, linkText, time, seen) {
        return {
            id, type, length, src, preview, link, linkText, time, seen
        };
    }

    /*==================================
    START THE STORIES [CIRCLES]
    ==================================*/
    var stories = new Zuck('stories', {
        autoFullScreen: true,  // enables fullscreen on mobile browsers
        skin: 'Snapgram',
        avatars: true,
        list: false,
        openEffect: true,
        cubeEffect: true,
        backButton: false,
        backNative: false,
        localStorage: false,
        paginationArrows: false,
        paginationArrows: true,
        stories: [{
            id: 'userOne',
            photo: 'images/avatar/22.jpg',
            name: 'MelonPixel⚡',
            link: '',
            lastUpdated: 1646579345,
            items: [
                buildItem('1', 'photo', 4, 'images/other/29.jpg', '', 'page-my-profile.html', 'Visit My Profile', 1646665745, false),
                buildItem('2', 'photo', 4, 'images/other/31.jpg', '', 'https://themeforest.net/item/unic-nft-mobile-template/36083774', 'Get it Now 🚀', 1646665745, false),
                buildItem('3', 'photo', 4, 'images/other/13.jpg', '', '', '', 1646838545, false),
            ],
        },
        {
            id: 'userTwo',
            photo: 'images/avatar/14.jpg',
            name: 'Camillo Ferrari',
            link: '',
            lastUpdated: 1646673856,
            items: [
                buildItem('4', 'photo', 5, 'images/other/5.jpg', '', '', '', 1646665745, false),
            ],
        },
        {
            id: 'userThree',
            photo: 'images/avatar/8.png',
            name: 'Pingu',
            link: '',
            lastUpdated: 1646753056,
            items: [
                buildItem('5', 'photo', 4, 'images/other/4.jpg', '', '', '', 1646753056, false),
                buildItem('6', 'photo', 4, 'images/other/11.jpg', '', '', '', 1646709856, false),
            ],
        },
        {
            id: 'userFour',
            photo: 'images/avatar/3.jpg',
            name: 'Julian Co.',
            link: '',
            lastUpdated: 1646789056,
            items: [
                buildItem('7', 'photo', 4, 'images/other/10.jpg', '', '', '', 1646789056, false),
            ],
        },
        {
            id: 'userFive',
            photo: 'images/avatar/5.png',
            name: 'Tito_Calab',
            link: '',
            lastUpdated: 1646803456,
            items: [
                buildItem('8', 'photo', 4, 'images/other/17.jpg', '', '', '', 1646803456, false),
            ],
        },
        {
            id: 'userSix',
            photo: 'images/avatar/7.jpg',
            name: 'DoggieBoy',
            link: '',
            lastUpdated: 1646889856,
            items: [
                buildItem('9', 'photo', 4, 'images/other/28.jpg', '', '', '', 1646889856, false),
            ],
        },
        {
            id: 'userSeven',
            photo: 'images/avatar/9.jpg',
            name: 'Leda Beneventi',
            link: '',
            lastUpdated: 1647321856,
            items: [
                buildItem('10', 'photo', 4, 'images/other/29.jpg', '', '', '', 1647321856, false),
            ],
        }],
    });


    /*==================================
    START THE BOX STORIES [BOXES]
    ==================================*/

    var stories = new Zuck('storiesBox', {
        autoFullScreen: true,
        skin: 'Snapssenger',
        avatars: false,
        list: false,
        openEffect: true,
        cubeEffect: true,
        backButton: false,
        backNative: false,
        localStorage: false,
        paginationArrows: true,
        stories: [{
            id: 'boxOne',
            photo: 'images/avatar/1.jpg',
            name: 'MelonPixel⚡',
            link: '',
            lastUpdated: 1646933141,
            items: [
                buildItem('1', 'photo', 4, 'images/other/29.jpg', 'images/other/29.jpg', '', '', 1646933141, false),
            ],
        },
        {
            id: 'boxTwo',
            photo: 'images/avatar/14.jpg',
            name: 'Camillo Ferrari',
            link: '',
            lastUpdated: 1649600741,
            items: [
                buildItem('2', 'photo', 4, 'images/other/19.jpg', 'images/other/19.jpg', '', '', 1649600741, false),
            ],
        },
        {
            id: 'boxThree',
            photo: 'images/avatar/8.png',
            name: 'Pingu',
            link: '',
            lastUpdated: 1649773541,
            items: [
                buildItem('3', 'photo', 4, 'images/other/25.jpg', 'images/other/25.jpg', '', '', 1649773541, false),
            ],
        },
        {
            id: 'boxFour',
            photo: 'images/avatar/16.jpg',
            name: 'DoggieBoy',
            link: '',
            lastUpdated: 1649946341,
            items: [
                buildItem('4', 'photo', 4, 'images/other/3.jpg', 'images/other/3.jpg', '', '', 1649946341, false),
            ],
        },
        {
            id: 'boxFive',
            photo: 'images/avatar/6.jpg',
            name: 'Julian Co.',
            link: '',
            lastUpdated: 1649082341,
            items: [
                buildItem('4', 'photo', 4, 'images/other/27.jpg', 'images/other/27.jpg', '', '', 1649082341, false),
            ],
        }],
    });

    /*==================================
    START THE STORIES [CIRCLES]
    ==================================*/

    var stories = new Zuck('StoriesList', {
        autoFullScreen: true,
        skin: 'vemdezap',
        avatars: true,
        list: true,
        openEffect: true,
        cubeEffect: true,
        backButton: false,
        backNative: false,
        localStorage: false,
        paginationArrows: false,
        paginationArrows: true,
        stories: [{
            id: 'ListOne',
            photo: 'images/avatar/22.jpg',
            name: 'MelonPixel⚡',
            link: '',
            lastUpdated: 1646579345,
            items: [
                buildItem('1', 'photo', 4, 'images/other/29.jpg', '', 'page-my-profile.html', 'Visit My Profile', 1646665745, false),
                buildItem('2', 'photo', 4, 'images/other/31.jpg', '', 'https://themeforest.net/item/unic-nft-mobile-template/36083774', 'Get it Now 🚀', 1646665745, false),
                buildItem('3', 'photo', 4, 'images/other/13.jpg', '', '', '', 1646838545, false),
            ],
        },
        {
            id: 'ListTwo',
            photo: 'images/avatar/14.jpg',
            name: 'Camillo Ferrari',
            link: '',
            lastUpdated: 1646673856,
            items: [
                buildItem('4', 'photo', 5, 'images/other/5.jpg', '', '', '', 1646665745, false),
            ],
        },
        {
            id: 'ListThree',
            photo: 'images/avatar/8.png',
            name: 'Pingu',
            link: '',
            lastUpdated: 1646753056,
            items: [
                buildItem('5', 'photo', 3, 'images/other/4.jpg', '', '', '', 1646753056, false),
                buildItem('6', 'photo', 3, 'images/other/11.jpg', '', '', '', 1646709856, false),
            ],
        },
        {
            id: 'ListFour',
            photo: 'images/avatar/3.jpg',
            name: 'Julian Co.',
            link: '',
            lastUpdated: 1646789056,
            items: [
                buildItem('7', 'photo', 5, 'images/other/10.jpg', '', '', '', 1646789056, false),
            ],
        },
        {
            id: 'ListFive',
            photo: 'images/avatar/5.png',
            name: 'Tito_Calab',
            link: '',
            lastUpdated: 1646803456,
            items: [
                buildItem('8', 'photo', 5, 'images/other/17.jpg', '', '', '', 1646803456, false),
            ],
        },
        {
            id: 'ListSix',
            photo: 'images/avatar/7.jpg',
            name: 'DoggieBoy',
            link: '',
            lastUpdated: 1646889856,
            items: [
                buildItem('9', 'photo', 5, 'images/other/28.jpg', '', '', '', 1646889856, false),
            ],
        },
        {
            id: 'ListSeven',
            photo: 'images/avatar/9.jpg',
            name: 'Leda Beneventi',
            link: '',
            lastUpdated: 1647321856,
            items: [
                buildItem('10', 'photo', 5, 'images/other/29.jpg', '', '', '', 1647321856, false),
            ],
        }],
    });

});
