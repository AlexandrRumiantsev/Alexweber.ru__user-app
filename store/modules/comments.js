const axios = require('axios');

const state = {
	//Тестовые хардкордные значения
	comments:[],
	test: 'xczx'
};

//  Объект для получения состояний в компоненте
const getters = {
    feathComments: () =>{
        return actions.feathComments;
	}
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	setComments: (comments) => {
		//localStorage.setItem('comments', JSON.stringify(comments));

	      //state.comments.push(comments);
	      state.comments = { 
	      	...state, comments: comments 
	      };

		
	},
	getComments: (state , comments) => {
		state.comments = comments;
	},
	SET_Comments (state, comments) {
        state.comments = comments
    }
}


//  Объект для получения данных из внешних источников
const actions = {
	load({ commit }) {
		axios.get(
			'http://alexweber.ru:5000/get_all_comments'
		).then(response => response.data)
        .then(comments => {
 
            commit('SET_Comments', comments)
        })


	},
	async addComments(obj ,data ){
		
		let send = function(){
			axios.post('http://alexweber.ru:5000/comment_add',data);
			alert('Комментарий отправлен');
			data.callbak(data);
		}

		const response = await send();
		
	},
	async feathComments(cb){
       	const result = await axios.get(
			'http://alexweber.ru:5000/get_all_comments'
		)
		//console.log(result.data);
		//console.log(state);
		
		//state.comments.push(result.data);

		cb(result.data);
		//mutations.setComments(state , response.data);
    	//cb(response.data);
	},
	refrashComments: function(obj , data){
		let insertData = {
			_id: 9999,
			title: data.comment,
			user: data.name,
			paper: data.paper,
			__v: 999
		}
		obj.state.comments.push(insertData);
	}
}



export default {
	state,
	getters,
	actions,
	mutations
}