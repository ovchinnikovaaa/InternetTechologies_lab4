import { createStore } from 'vuex'

export default createStore({
    state: { // поля которые хранят значения
        market: JSON.parse(localStorage.getItem('market')) ? JSON.parse(localStorage.getItem('market')) : [],
        list: [
            {
                id: '1',
                name: 'Розы №1',
                category: 'rose',
                img: "https://sun9-12.userapi.com/LSiQglqVU-igV6JxirgCClqXT516Y4ONwL-odg/iHHm7GNE6s4.jpg",
                price: 4500
            },
            {
                id: '2',
                name: 'Розы №2',
                category: 'rose',
                img: "https://clck.ru/32pZqu",
                price: 1300
            },
            {
                id: '3',
                name: 'Розы №3',
                category: 'rose',
                img: "https://sun9-62.userapi.com/Fw8v4hDwmT5cp2RqDfaWjJI8IJgKlr6PovN-Wg/fH7lUNUJbBA.jpg",
                price: 5670
            },
            {
                id: '4',
                name: 'Розы №4',
                category: 'rose',
                img: "https://sun9-22.userapi.com/CyKTdJZZRNBs8Ms5EqzrA8NsmuH-xx6ZIgJCOQ/PQYO93EW5B8.jpg",
                price: 900
            },
            {
                id: '5',
                name: 'Розы №5',
                category: 'rose',
                img: "https://sun9-79.userapi.com/TFlUS0jmTxTzhIOf3xTmgViui5hK75pX5qlfLw/1eeO_9yKFHI.jpg",
                price: 3400
            },
            {
                id: '6',
                name: 'Розы №6',
                category: 'rose',
                img: "https://sun9-59.userapi.com/9qF2oGMADy_o7ia9aW4FPdcD94WWOXPgJr7tuA/HLZguoD8oHw.jpg",
                price: 8000
            },
            {
                id: '7',
                name: 'Розы №7',
                category: 'rose',
                img: "https://sun9-45.userapi.com/WXIbJ4MF8owrLH5lnq5WTaeKfzgQg63RZHy-Xg/EiEDhyg9fWk.jpg",
                price: 8900
            },
            {
                id: '8',
                name: 'Розы №8',
                category: 'rose',
                img: "https://sun9-9.userapi.com/YUYN2LFpeA5UMeH6HtSNkNCa1g5A089GZvFCww/WOqNpCznppk.jpg",
                price: 4300
            },
            {
                id: '9',
                name: 'Композиция №1',
                category: 'daisy',
                img: "https://sun9-45.userapi.com/lhWDIo8DkujZDSEnIL4e_D_b9L5eQDWOhSHlZQ/4VVzJYz_H7o.jpg",
                price: 14000
            },
            {
                id: '10',
                name: 'Композиция №2',
                category: 'daisy',
                img: "https://sun9-16.userapi.com/xzTkNYIPE2oiBewPEOVoig7HOywmTOlSARTSCw/CrXazGWewNU.jpg",
                price: 15000
            },
            {
                id: '11',
                name: 'Композиция №3',
                category: 'daisy',
                img: "https://sun9-10.userapi.com/2et-4bpnRufnNf90aNZ8NQgztUZuW28I5RvDZA/r11UPAWT_dI.jpg",
                price: 7600
            },
            {
                id: '12',
                name: 'Композиция №4',
                category: 'daisy',
                img: "https://sun9-88.userapi.com/TygOpmZWvBsp5DrweiX9ezgyCnnoNzgE9X9ePQ/maxJads3u3k.jpg",
                price: 1005
            },
            {
                id: '13',
                name: 'Композиция №5',
                category: 'daisy',
                img: "https://sun9-4.userapi.com/WdTvjhl2vac0AL3G-RYqNKi6ofy2Bi6dglJAkQ/x4DzOXA9xak.jpg",
                price: 36000
            },
            {
                id: '14',
                name: 'Композиция №6',
                category: 'daisy',
                img: "https://sun9-1.userapi.com/qywWZb2wMdjzCetoHG4rLtsh2Niks171m8enKw/52a9hLB993w.jpg",
                price: 9000
            },
            {
                id: '15',
                name: 'Композиция №7',
                category: 'daisy',
                img: "https://sun9-44.userapi.com/9aiTusG6d3D46us7LUb0YtjevsIEK-rHcoFm3A/YHEotmZYncU.jpg",
                price: 7590
            },
            {
                id: '16',
                name: 'Композиция №8',
                category: 'daisy',
                img: "https://sun9-31.userapi.com/c849032/v849032684/24417/Tkjdeth_Ptw.jpg",
                price: 21000
            }
        ]
    },
    getters: {
        getMarket: (state) => state.market.map(id => state.list.find(item => item.id === id)),
        getMarketCounter: (state) => state.market.length,
        getMarketSum: (state) => {
            const allItems = state.market.map(id => state.list.find(item => item.id === id))
            let summ = 0
            allItems.forEach(element => {
                summ += element.price
            })
            return summ
        },
        getRoseList: (state) => state.list.filter(item => item.category === 'rose'),
        getDaisyList: (state) => state.list.filter(item => item.category === 'daisy')
    },
    mutations: {
        addMarket(state, id) {
            state.market.push(id)
            localStorage.setItem('market', JSON.stringify(state.market))
        },
        removeMarket(state, index) {
            state.market.splice(index, 1)
            localStorage.setItem('market', JSON.stringify(state.market))
        }
    },
    actions: {
        addMarket({commit}, id) {
            commit('addMarket', id)
        },
        removeMarket({commit}, index) {
            commit('removeMarket', index)
        }
    },
    modules: {
    }
})
