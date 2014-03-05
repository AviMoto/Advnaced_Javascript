describe('MotoGP APP', function(){
	describe('Rider list view', function(){
		beforeEach(function(){
			browser().navigateTo('index.html');
		});
		
		it('should filter the rider list', function(){
			expect(repeater('.riders li').count()).toBe(5);
			
			input('query').enter('Valentino');
			expect(repeater('.riders li').count()).toBe(1);
			
			input('query').enter('spa');
			expect(repeater('.riders li').count()).toBe(3);
		});
		
		it('should be possible to control Rider order by the order drop down menu', function() {
			//let's narrow the dataset to make the test assertions shorter
			input('query').enter('spa');
				  
			expect(repeater('.riders li', 'Rider List').column('rider.name')).toEqual([
			    "Dani Pedrosa",
			    "Marq Marquez",
			    "Jorge Lorenzo",
			]);
			select('orderProp').option('Name');
				  
			expect(repeater('.riders li', 'Rider List').column('rider.name')).toEqual([
			    "Dani Pedrosa",
			    "Jorge Lorenzo",
			    "Marq Marquez",
			]);
		});
	});
});