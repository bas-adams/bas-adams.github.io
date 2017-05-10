(function(){
	var block_1_run = document.querySelector('.btn_run_1'),
			block_1_pause = document.querySelector('.btn_pause_1'),

			move_1_1 = document.querySelector('#move_1_1'),
			move_1_2 = document.querySelector('#move_1_2'),

			block_2_run = document.querySelector('.btn_run_2'),
			block_2_pause = document.querySelector('.btn_pause_2'),

			
			move_2_1 = document.querySelector('#move_2_1'),
			move_2_2 = document.querySelector('#move_2_2');


	block_1_run.addEventListener('click', function(event){
		
		block_1_run.classList.add('btn-checked');
		block_1_pause.classList.remove('btn-checked');
	
		move_1_1.classList.remove('anim_pause');
		move_1_1.classList.add('anim_start');
		move_1_2.classList.remove('anim_pause');
		move_1_2.classList.add('anim_start');

	});

	block_1_pause.addEventListener('click', function(event){
		block_1_run.classList.remove('btn-checked');
		block_1_pause.classList.add('btn-checked');
		
		move_1_1.classList.add('anim_pause');
		move_1_1.classList.remove('anim_start');
		move_1_2.classList.add('anim_pause');
		move_1_2.classList.remove('anim_start');
	});

	block_2_run.addEventListener('click', function(event){
		block_2_run.classList.add('btn-checked');
		block_2_pause.classList.remove('btn-checked');

		
		move_2_1.classList.remove('anim_pause');
		move_2_1.classList.add('anim_start');
		move_2_2.classList.remove('anim_pause');
		move_2_2.classList.add('anim_start');

	});

	block_2_pause.addEventListener('click', function(event){
		block_2_run.classList.remove('btn-checked');
		block_2_pause.classList.add('btn-checked');


		move_2_1.classList.remove('anim_start');
		move_2_1.classList.add('anim_pause');
		move_2_2.classList.remove('anim_start');
		move_2_2.classList.add('anim_pause');

	});


}());