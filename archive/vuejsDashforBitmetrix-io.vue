<template>
  <div v-if="!loadedOrNo">
    <b-row class="d-flex justify-content-center m-1">
      <span class="report-title">Daily Bitcoin Twitter Metrics</span>
    </b-row>
    <b-row v-if="!loadedOrNo" class="d-flex justify-content-between" align-v="stretch">

    <b-col>
      <StatisticCardTweets :statistic="calcSentiment" icon="TrendingUpIcon" statisticTitle="Positive Sentiment" symbol="%" color="text-success" >
      </StatisticCardTweets>
    <b-card title="Dashboard Updates 🚀" v-if="!loadedOrNo" class="share-300">
      <b-card-text>Last Updated: {{calcTimeEdition}}</b-card-text>
      <b-card-text>Check back frequently for updates!  </b-card-text>
      <!-- <b-card-text>Follow: <a href="https://twitter.com/CoinPackets" target="_blank" rel="noopener noreferrer">@coinpackets </a></b-card-text> -->
    </b-card>
    <NewsLetterCard/>
    
    </b-col>
    <b-col>
      
      
    <PriceCard  >
      </PriceCard>
      
    </b-col>

    <b-col>
    <CardProfile  :data="createdEngagementList" class="share-450"/>
    </b-col>
  
    </b-row>

    <b-row v-if="!loadedOrNo" class="d-flex justify-content-between align-items-stretch" >
      <b-col>
        <WordCloud :wordList="calcWordOccurences" />
        <!-- <StatisticCardTweets :statistic="calcTotalsTweets" icon="TwitterIcon" statisticTitle="Tweets Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets>
        <StatisticCardTweets :statistic="calcTotalsLikes" icon="HeartIcon" statisticTitle="Likes Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets>
        <StatisticCardTweets :statistic="calcTotalsRetweets" icon="RepeatIcon" statisticTitle="Retweets Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets>
        <StatisticCardTweets :statistic="calcTotalsReplies" icon="MessageCircleIcon" statisticTitle="Replies Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets> -->
        
        
    </b-col>
      <b-col >
        <CardTopUsers :img="imageCard.engagement"  title='Most Engaging' :list="createdEngagementList"   metric='engagements' subtitle='Profiles with the most twitter reactions' ></CardTopUsers>
      </b-col >
      <b-col >
      <CardTopUsers :img="imageCard.active"  title='Most Active' :list="createdActivityList"  metric='count' subtitle='Profiles that pump out the most engaging tweets' ></CardTopUsers>
      </b-col>
      <b-col >
      <CardTopUsers :img="imageCard.popular" title='Most Popular' :list="createdPopularityList"  metric='mentions' subtitle='Profiles with the most mentions from peers' ></CardTopUsers>
      </b-col>
    </b-row>
    <!-- <b-row class="d-flex justify-content-between">
    <b-card title="Influencer Chart" v-if="BaseMonthlyDataSet.influencersData">
      <inf-table :baseMonthlyDataSet="BaseMonthlyDataSet.influencersData" />
    </b-card>
    </b-row> -->
    
  </div>
</template>

<script>
import { BCard, BRow, BCardText, BLink, BCol, BCardGroup} from 'bootstrap-vue'
import InfTable from '@core/components/tables/InfTable.vue'
import StatisticCardTweets from './card/StatisticCardTweets.vue'
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import CardTopUsers from './card/CardTopUsers.vue'
import CardProfile from './card/CardProfile.vue'
import CardFinance from './card/CardFinance.vue'
import PriceCard from './card/PriceCard.vue'
import NewsLetterCard from './card/NewsLetterCard.vue'
import WordCloud from './card/WordCloud.vue'

const sort = (type,array) =>{
    let newArray = [...array]
    return(newArray.sort((a,b) =>{
      let x = a[type]
      let y = b[type]
      return y-x
    })
    )
}

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    InfTable,
    BRow,
    StatisticCardTweets,
    CardTopUsers,
    CardProfile,
    BCol,
    CardFinance,
    PriceCard,
    NewsLetterCard,
    WordCloud
    
    
  },

  data (){
    return{
      imageCard: {
        engagement: require('@/assets/images/icons/_engagement (1).svg'),
        active: require('@/assets/images/icons/_busy (1).svg'),
        popular: require('@/assets/images/icons/_trending.svg'),
        topic: ''
      },
      loaded: false,
      // firstloaded: false,
      // BaseMonthlyDataSet,
      // BaseMonthlyDataSet: null
    }
  },

  computed:{

    loadedOrNo(){
      return this.$store.state.app.loading
    },

    BaseMonthlyDataSet(){

      let a = this.$store.getters['app/baseMonthlyDataSet']
      return a
      }
    ,
    calcSentiment(){
      // if(this.loaded){
        return (
        (this.BaseMonthlyDataSet.totalsData.data.posCount * 100)/

        (this.BaseMonthlyDataSet.totalsData.data.negCount + this.BaseMonthlyDataSet.totalsData.data.neuCount + this.BaseMonthlyDataSet.totalsData.data.posCount)
        )
      // } else{
      //   return
      // }
    },
    calcTotalsTweets(){
    
        return (
        this.BaseMonthlyDataSet.totalsData.data.countA )

    },
    calcTotalsReplies(){
      return (
        this.BaseMonthlyDataSet.totalsData.data.repliesA )


    },
    calcTotalsLikes(){
      return (
        this.BaseMonthlyDataSet.totalsData.data.likesA )


    },
    calcTotalsRetweets(){
      return (
        this.BaseMonthlyDataSet.totalsData.data.retweetsA )


    },
    calcEngagements(){
      return (this.BaseMonthlyDataSet.totalsData.data.replies + this.BaseMonthlyDataSet.totalsData.data.retweets + this.BaseMonthlyDataSet.totalsData.data.likes) 

    },
    createdEngagementList(){
      return(sort('engagements', this.BaseMonthlyDataSet.influencersData))

    },
    createdActivityList(){
      return(sort('count', this.BaseMonthlyDataSet.influencersData))
    },
    createdPopularityList(){
      return(sort('mentions', this.BaseMonthlyDataSet.influencersData))
    },
    calcMonthEdition(){
      return(moment(this.BaseMonthlyDataSet.until).format("MMM 'YY"))
    },
    calcTimeEdition(){
      return(moment(this.BaseMonthlyDataSet.until).format("M/D/YY - h:mmA"))
    },
    calcWordOccurences(){
      return(sort('count', this.BaseMonthlyDataSet.wordOccurences))
    },

  //   ...mapGetters({
	// 		BaseMonthlyDataSet: 'app/baseMonthlyDataSet',
  // })
  },
  methods:{
    sortInfAndTweets(){

    }

    },

  // watch: {
  //     // whenever question changes, this function will run
  //     BaseMonthlyDataSet(newData, oldData) {
  //       if (newData.length > 1) {
  //         console.log(newData)
  //         this.loaded = true
  //       }
  //     }
  //   },
  // watch: {
  //   // whenever question changes, this function will run
	// 	BaseMonthlyDataSet: function (old, newg) {
	// 		// if(this.BaseMonthlyDataSet){
	// 			this.loaded = true
	// 		// }
			
	// 	}
   
  // },
  created() {
		let asset = 'bitcoin'
    this.topic='Bitcoin'

		let since = moment().startOf('months').subtract(1, 'months').format()
		// let until = moment(since,'YYYY-MM-DD').add(1,'months').format('YYYY-MM-DD')
		this.since = since
		this.asset = asset
		
		// this.until = until
    // let slug = `${asset}&${since}`
    let slug = `${asset}`
		// this.$store.dispatch('app/getBaseDataSetMonth', {slug})
    this.$store.dispatch('app/getBaseDataSetMonth', {slug}).then(profile => {

      
		})

    // console.log(this.$store.state.app.loading)
	},
  }

  
</script>

<style>
.push-right{
  margin-right: 2rem !important;
}
.report-title{
  font-weight: 600;
  margin-bottom: 2rem;
  
}
.card-height-369{
  height: 425px;
}

.share-450{
  height: 450px;
}

.share-480{
  height: 480px;
}

.share-300{
  height: 175px;
}
</style>
<template>
  <div v-if="!loadedOrNo">
    <b-row class="d-flex justify-content-center m-1">
      <span class="report-title">Daily Bitcoin Twitter Metrics</span>
    </b-row>
    <b-row v-if="!loadedOrNo" class="d-flex justify-content-between" align-v="stretch">

    <b-col>
      <StatisticCardTweets :statistic="calcSentiment" icon="TrendingUpIcon" statisticTitle="Positive Sentiment" symbol="%" color="text-success" >
      </StatisticCardTweets>
    <b-card title="Dashboard Updates 🚀" v-if="!loadedOrNo" class="share-300">
      <b-card-text>Last Updated: {{calcTimeEdition}}</b-card-text>
      <b-card-text>Check back frequently for updates!  </b-card-text>
      <!-- <b-card-text>Follow: <a href="https://twitter.com/CoinPackets" target="_blank" rel="noopener noreferrer">@coinpackets </a></b-card-text> -->
    </b-card>
    <NewsLetterCard/>
    
    </b-col>
    <b-col>
      
      
    <PriceCard  >
      </PriceCard>
      
    </b-col>

    <b-col>
    <CardProfile  :data="createdEngagementList" class="share-450"/>
    </b-col>
  
    </b-row>

    <b-row v-if="!loadedOrNo" class="d-flex justify-content-between align-items-stretch" >
      <b-col>
        <WordCloud :wordList="calcWordOccurences" />
        <!-- <StatisticCardTweets :statistic="calcTotalsTweets" icon="TwitterIcon" statisticTitle="Tweets Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets>
        <StatisticCardTweets :statistic="calcTotalsLikes" icon="HeartIcon" statisticTitle="Likes Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets>
        <StatisticCardTweets :statistic="calcTotalsRetweets" icon="RepeatIcon" statisticTitle="Retweets Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets>
        <StatisticCardTweets :statistic="calcTotalsReplies" icon="MessageCircleIcon" statisticTitle="Replies Analyzed" symbol="" color="text-primary" >
        </StatisticCardTweets> -->
        
        
    </b-col>
      <b-col >
        <CardTopUsers :img="imageCard.engagement"  title='Most Engaging' :list="createdEngagementList"   metric='engagements' subtitle='Profiles with the most twitter reactions' ></CardTopUsers>
      </b-col >
      <b-col >
      <CardTopUsers :img="imageCard.active"  title='Most Active' :list="createdActivityList"  metric='count' subtitle='Profiles that pump out the most engaging tweets' ></CardTopUsers>
      </b-col>
      <b-col >
      <CardTopUsers :img="imageCard.popular" title='Most Popular' :list="createdPopularityList"  metric='mentions' subtitle='Profiles with the most mentions from peers' ></CardTopUsers>
      </b-col>
    </b-row>
    <!-- <b-row class="d-flex justify-content-between">
    <b-card title="Influencer Chart" v-if="BaseMonthlyDataSet.influencersData">
      <inf-table :baseMonthlyDataSet="BaseMonthlyDataSet.influencersData" />
    </b-card>
    </b-row> -->
    
  </div>
</template>

<script>
import { BCard, BRow, BCardText, BLink, BCol, BCardGroup} from 'bootstrap-vue'
import InfTable from '@core/components/tables/InfTable.vue'
import StatisticCardTweets from './card/StatisticCardTweets.vue'
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import CardTopUsers from './card/CardTopUsers.vue'
import CardProfile from './card/CardProfile.vue'
import CardFinance from './card/CardFinance.vue'
import PriceCard from './card/PriceCard.vue'
import NewsLetterCard from './card/NewsLetterCard.vue'
import WordCloud from './card/WordCloud.vue'

const sort = (type,array) =>{
    let newArray = [...array]
    return(newArray.sort((a,b) =>{
      let x = a[type]
      let y = b[type]
      return y-x
    })
    )
}

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    InfTable,
    BRow,
    StatisticCardTweets,
    CardTopUsers,
    CardProfile,
    BCol,
    CardFinance,
    PriceCard,
    NewsLetterCard,
    WordCloud
    
    
  },

  data (){
    return{
      imageCard: {
        engagement: require('@/assets/images/icons/_engagement (1).svg'),
        active: require('@/assets/images/icons/_busy (1).svg'),
        popular: require('@/assets/images/icons/_trending.svg'),
        topic: ''
      },
      loaded: false,
      // firstloaded: false,
      // BaseMonthlyDataSet,
      // BaseMonthlyDataSet: null
    }
  },

  computed:{

    loadedOrNo(){
      return this.$store.state.app.loading
    },

    BaseMonthlyDataSet(){

      let a = this.$store.getters['app/baseMonthlyDataSet']
      return a
      }
    ,
    calcSentiment(){
      // if(this.loaded){
        return (
        (this.BaseMonthlyDataSet.totalsData.data.posCount * 100)/

        (this.BaseMonthlyDataSet.totalsData.data.negCount + this.BaseMonthlyDataSet.totalsData.data.neuCount + this.BaseMonthlyDataSet.totalsData.data.posCount)
        )
      // } else{
      //   return
      // }
    },
    calcTotalsTweets(){
    
        return (
        this.BaseMonthlyDataSet.totalsData.data.countA )

    },
    calcTotalsReplies(){
      return (
        this.BaseMonthlyDataSet.totalsData.data.repliesA )


    },
    calcTotalsLikes(){
      return (
        this.BaseMonthlyDataSet.totalsData.data.likesA )


    },
    calcTotalsRetweets(){
      return (
        this.BaseMonthlyDataSet.totalsData.data.retweetsA )


    },
    calcEngagements(){
      return (this.BaseMonthlyDataSet.totalsData.data.replies + this.BaseMonthlyDataSet.totalsData.data.retweets + this.BaseMonthlyDataSet.totalsData.data.likes) 

    },
    createdEngagementList(){
      return(sort('engagements', this.BaseMonthlyDataSet.influencersData))

    },
    createdActivityList(){
      return(sort('count', this.BaseMonthlyDataSet.influencersData))
    },
    createdPopularityList(){
      return(sort('mentions', this.BaseMonthlyDataSet.influencersData))
    },
    calcMonthEdition(){
      return(moment(this.BaseMonthlyDataSet.until).format("MMM 'YY"))
    },
    calcTimeEdition(){
      return(moment(this.BaseMonthlyDataSet.until).format("M/D/YY - h:mmA"))
    },
    calcWordOccurences(){
      return(sort('count', this.BaseMonthlyDataSet.wordOccurences))
    },

  //   ...mapGetters({
	// 		BaseMonthlyDataSet: 'app/baseMonthlyDataSet',
  // })
  },
  methods:{
    sortInfAndTweets(){

    }

    },

  // watch: {
  //     // whenever question changes, this function will run
  //     BaseMonthlyDataSet(newData, oldData) {
  //       if (newData.length > 1) {
  //         console.log(newData)
  //         this.loaded = true
  //       }
  //     }
  //   },
  // watch: {
  //   // whenever question changes, this function will run
	// 	BaseMonthlyDataSet: function (old, newg) {
	// 		// if(this.BaseMonthlyDataSet){
	// 			this.loaded = true
	// 		// }
			
	// 	}
   
  // },
  created() {
		let asset = 'bitcoin'
    this.topic='Bitcoin'

		let since = moment().startOf('months').subtract(1, 'months').format()
		// let until = moment(since,'YYYY-MM-DD').add(1,'months').format('YYYY-MM-DD')
		this.since = since
		this.asset = asset
		
		// this.until = until
    // let slug = `${asset}&${since}`
    let slug = `${asset}`
		// this.$store.dispatch('app/getBaseDataSetMonth', {slug})
    this.$store.dispatch('app/getBaseDataSetMonth', {slug}).then(profile => {

      
		})

    // console.log(this.$store.state.app.loading)
	},
  }

  
</script>

<style>
.push-right{
  margin-right: 2rem !important;
}
.report-title{
  font-weight: 600;
  margin-bottom: 2rem;
  
}
.card-height-369{
  height: 425px;
}

.share-450{
  height: 450px;
}

.share-480{
  height: 480px;
}

.share-300{
  height: 175px;
}
</style>
