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
        getLoaderLink( childMenu ){
            this.$store.commit( "LOAD_LINK", childMenu.text )
        }
    }
}