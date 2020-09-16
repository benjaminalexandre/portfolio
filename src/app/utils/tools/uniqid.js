const uniqid = () => (new Date().getTime() + Math.floor(Math.random() * 10000 + 1)).toString(16)

export default uniqid
