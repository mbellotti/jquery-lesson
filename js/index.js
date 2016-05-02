$(document).ready(function(){
	var panels = {
		'panel-choice-1': {'level':'.decision1','open':'#panel2'},
		'panel-choice-2': {'level':'.decision1','open':'#panel3'},
		'panel-choice-3': {'level':'.decision2','open':'#panel4'},
		'panel-choice-4': {'level':'.decision2','open':'#panel5'},
		'panel-choice-5': {'level':'.decision3','open':'#panel6'},
		'panel-choice-6': {'level':'.decision3','open':'#panel7'},
	}
	$('.decision-button').click(function(){
		var choice = this.id;
		$(panels[choice]['level']).hide();
		$(panels[choice]['open']).show();
	});
});