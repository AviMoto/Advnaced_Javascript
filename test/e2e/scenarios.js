describe('MotoGP APP', function(){
	describe('Rider list view', function(){
		beforeEach(function(){
			browser().navigateTo('index.html');
		});
		
		it('should filter the rider list', function(){
			expect(repeater('.riders li').count()).toBe(2);
			
			input('query').enter('Valentino');
			expect(repeater('.riders li').count()).toBe(1);
			
			input('query').enter('Marq');
			expect(repeater('.riders li').count()).toBe(1);
		});
	});
});