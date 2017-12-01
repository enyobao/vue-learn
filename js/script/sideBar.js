import { mapState, mapMutations } from 'vuex';
import menus from '../../data/menus'

export default {
    data(){
        return {
            menus
        }
    },
    methods:{
        ...mapMutations([
            'LOAD_LINK'
        ]),
        // toggeleMenu(menu) {
        //     if ( menu.href ) {
        //         this.$router.push(menu.href);
        //         this.menus.forEach(item => {
        //             item.class = '';
        //             if (item.childMenus && item.childMenus.length > 0 ) {
        //                 item.childMenus.forEach(child => {
        //                     child.class = '';
        //                 })
        //             }
        //         })
        //         menu.class = 'active';
        //         return ;
        //     }
        // },
        getLoaderLink( childMenu ){
            this.$store.commit( "LOAD_LINK", childMenu.text )
            // this.toggeleMenu(childMenu);
        }
    }
}