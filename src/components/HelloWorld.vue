<template>
    <div>
        <div>这是count：{{count}}</div>
        <button @click="add">调用父组件方法</button>
    </div>
</template>

<script>
import { reactive, toRef, getCurrentInstance } from 'vue'
export default {
    name: 'HelloWorld',
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    setup(props, context) {
        // const text = toRef(props, 'count');
        const instance = getCurrentInstance();
        const add = () => {
            // context.emit('countAdd');
            // console.log(props.count);
            instance.proxy.$emit('countAdd');
            // console.log(props.count);
        }
        return {
            // text,
            add
        }
    }
}
</script>
