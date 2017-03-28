/*
The shipments are packed in a variety of types which can hold others for shipping.
Following is the order: the preceeders can hold any of the successors 

Trailer 
Pallet
Package
Item

Given a Container c add it to another container p 
c can be added to p 
if c is not inside p already
if c type is not same or preceeding p type

*/

var type = {
    Trailer: 0,
    Pallet: 1,
    Package: 2,
    Item: 3    
};

function Container(id, t) {
    var self = this;
    self._id = id;
    self.children;
    self._type = t;

	var checkValidityOfContainer = function(container, maxLevel) {
		if(!container) return true;
		if(container._type <= maxLevel) return false;
		var levelValid = true;
		if(container.children) {
			for(var i=0;i<container.children.length && levelValid;++i) {
				 levelValid &= checkValidityOfContainer(container.children[i], container._type);
			}
		}	
		return levelValid;	
	};
	
	self.isValid = function() {
		return checkValidityOfContainer(self, self._type-1);
	};
	
    var getNodeIds = function(arr) {
        var s = [];
        arr = arr || [];
        for(i=0;i<arr.length;i++) {
            s.push(arr[i]._id);
        }
        return s;
    };
	
    self.addChild = function(childNode) {
        if(childNode._type <= self._type) throw "item id:" + self._id + " type:" + self._type +" can't hold id:" + childNode._id + " type:" + childNode._type;        
        if(self.containsNode(childNode)) throw "item id:"+ childNode._id + " type:" + childNode._type + " already present";
        if(!self.children)
            self.children = [];
        self.children.push(childNode);
    };
    
    var hasChild = function(root, id) {
        if(!root) return false;
		if(root._id === id) return true;
		
		if(root.children) {
            var contains = false;
            for(var i=0;i<root.children.length && !contains;++i) {
                contains |= hasChild(root.children[i], id);
            }
            return contains;
		} 
		return false;
    };
        
    self.containsNode = function(child) {
        return hasChild(self, child._id);
    };
    
    self.printByLevel = function() {
        var elems = [];
        
        var q = [], i, j, cN;
        q.push(self);
        while(q.length > 0) {
            cN = q.shift();
            if(!elems[cN._type]) elems[cN._type] = [];
            elems[cN._type].push(cN._id);
            if(cN.children) {
                q.push.apply(q, cN.children);
            }
        }
        for(i=0;i<elems.length;i++) {
            console.log('item level ' + i + ":", elems[i]);
        }
    };
	var getNodeInfo = function(a) {
	    return { id: a._id, type: a._type };
	};
	
	self.printTree = function() {
		var elems = [];
		var q = [];
		q.push(self);
		elems.push([getNodeInfo(self)]);
		
		while(q.length>0) {
			cN = q.shift();
            if(cN.children) {
                q.push.apply(q, cN.children);
				elems.push(cN.children.map(getNodeInfo));
            }
		}
		
        for(i=0;i<elems.length;i++) {
            console.log('tree level ' + i + ":", elems[i]);
        }
		
	};
}

function start() {
    var i = 1;
    var root = new Container(i++, type.Trailer);
    root.addChild(new Container(i++, type.Pallet));
    root.addChild(new Container(i++, type.Pallet));
    root.addChild(new Container(i++, type.Pallet));  
    var package1 = new Container(i++, type.Package);
    package1.addChild(new Container(i++, type.Item));  
    root.addChild(package1);   
    root.addChild(new Container(i++, type.Item));   
    root.addChild(new Container(i++, type.Package));
    root.addChild(new Container(i++, type.Pallet));    
    root.printTree(); root.printByLevel(); console.log("isValid: ", root.isValid());
    package1.children[0]._type = 0; 
    root.printTree(); root.printByLevel(); console.log("isValid: ", root.isValid());
    package1.children[0]._type = type.Item;
    
	try{
		root.addChild(new Container(i, type.Item));
		root.addChild(new Container(i++, type.Package));
	} catch(e) {
		console.error(e);
	}
    root.printTree(); root.printByLevel();
	
	try{
		root.addChild(new Container(i, type.Trailer));
	} catch(e) {
		console.error(e);
	}
	
	try{
		package1.addChild(new Container(++i, type.Trailer));
	} catch(e) {
		console.error(e);
	}
}

start();