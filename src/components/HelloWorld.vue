<template>
    <div>
        {{msg}}
        {{text}}
        <button @click="add">调用父组件方法</button>
    </div>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
    name: 'HelloWorld',
    props: {
        msg: Number
    },
    setup(props, context) {
        const text = toRef(props, 'msg');
        const add = () => {
            context.emit('countAdd');
        }
        return {
            text,
            add
        }
    }
}
</script>
