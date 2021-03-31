<template>
    <div>
        <pdf
        ref="pdf"
        :src="url" 
        ></pdf>
        <!-- <button @click="show"></button> -->
    </div>
</template>
<script>
import axios from "axios";
import pdf from 'vue-pdf'
export default {
    components:{
        pdf
    },
    data(){
        return{
            name:'',
            indentify:'',
            url:'',
            numPages: null
        }
    },
    created() {
    console.log('this.$route.queryname:' + this.$route.params.name)
    this.name = this.$route.params.name;
    this.indentify = this.$route.params.indentify;

    let param = {}
    param.name = this.name;
    param.indentify = this.indentify;

    console.log( this.name + this.pdfUrl);
    let self = this
    axios
    .post('/reportbackend/v1.0/report', param)
    .then(function(response) {
      console.log('*****' + response.data.data + self.pdfUrl);
      self.url = response.data.data
    })
    .catch(function(error) {
      console.log(error);
    });
   
  },
     methods: {
      show(){
        //   console.log('show:' + this.pdfUrl);
        //   this.url = this.pdfUrl;
        //   console.log('show:' + this.url);
      },

    //   getNumPages() {
    //     console.log("********getNumPages url:" + this.url)
    //     let loadingTask = pdf.createLoadingTask(this.url)
    //     loadingTask.promise.then(pdf => {
    //       console.log("********getNumPages pdf.numPages:" + pdf.numPages)
    //       this.numPages = pdf.numPages
    //     }).catch(err => {
    //       console.error('pdf 加载失败', err);
    //     })
    // }
}
  
}
</script>