<script setup>
    import {ref, onMounted, onBeforeUnmount} from "vue";

    const newChartItem = ref(20)
    const newChartItemColor = ref('Green')
    let chart = null

    const dataset = [
        300, 50, 100
    ]
    const colorDataSet = [
        'red',
        'blue',
        'Yellow'
    ]
    const data = {
        labels: colorDataSet,
        datasets: [{
            label: 'My First Dataset',
            data: dataset,
            backgroundColor: colorDataSet,
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
    };

    onMounted(() => {
        const ctx = document.getElementById('chart')
        chart = new Chart(ctx, config)

    })

    onBeforeUnmount(()=>{
        if (chart){
            chart.destroy()
            chart = null
        }
    })

    function updateChart() {
        dataset.push(newChartItem.value)
        colorDataSet.push(newChartItemColor.value)
        chart.data.datasets[0].data = dataset
        chart.data.datasets[0].backgroundColor = colorDataSet
        chart.update()
    }
</script>

<template>
    <div class="mx-10">
        <div class="my-10 flex justify-center">
        <input class="mr-2 px-3" type="text" v-model="newChartItem">
        <input class="px-3" type="text" v-model="newChartItemColor">
        <button @click="updateChart()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
        </button>
    </div>
    <div class=" mx-auto w-[400px] h-[400px] bg-white p-5 rounded-md shadow">
        <canvas id="chart">
        </canvas>
    </div>
    </div>
    
</template>

<style scoped>
    input {
        background-color: #191616;
    }

</style>