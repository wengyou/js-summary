var sumRootToLeaf = function(root) {
    function f(root,s='') {
        if(root===null) return ''
        if(root.left===null&&root.right==null) return s+=root.val+'|'
        s+=root.val
        return f(root.left,s) + f(root.right,s)
    };
    var arr=f(root).split('|')
    return arr.slice(0,arr.length-1).reduce((p,v)=>p+parseInt(v,2),0)
};

// sumRootToLeaf([1,0,1,0,1,0,1]);