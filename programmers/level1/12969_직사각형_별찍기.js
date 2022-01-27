process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const _TEST_CASE = 1;
    const n = data.split(" ");
    const a = Number(n[0]) || _TEST_CASE, b = Number(n[1]) || _TEST_CASE;
    console.time('test');
    console.log('*'.repeat((a+1)*b).split('').map((v, i) => i!==0 ? i%(a+1)===0 ? '\n' : v : '').join(''));
    // console.log('*'.repeat((a+1)*b).split('').map((v, i) => i%(a+1)===0 ? '\n' : v).slice(1).join(''));
    console.timeEnd('test');
    
});

process.stdin.emit('data');