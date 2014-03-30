describe('MotoGP APP', function(){
	
	it('should redirect index.html to index.html#/riders', function() {
	    browser().navigateTo('index.html');
	    expect(browser().location().url()).toBe('/riders');
	  });
	
	describe('Rider list view', function(){
		beforeEach(function(){
			browser().navigateTo('index.html');
		});
		
		it('should filter the rider list', function(){
			expect(repeater('.riders li').count()).toBe(23);
			
			input('query').enter('Valentino');
			expect(repeater('.riders li').count()).toBe(1);
			
			input('query').enter('spa');
			expect(repeater('.riders li').count()).toBe(9);
		});
	});	
});