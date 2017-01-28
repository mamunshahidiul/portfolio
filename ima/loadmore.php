<?php
$id = trim($_GET['id']);
$id = (int) $id;
$j = 1;
for($i=1; $i <= 2; $i++){
	
?>            
		<div class="row">
				<div class="col-md-6 col-sm-6 content">
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12  content-left">
							<h2>KITCHEN</h2>
							<div id="carousel-example-generic<?php echo $id+$i.'-01'; ?>" class="carousel slide" data-ride="carousel">
									  <!-- Indicators -->
									  <!-- Wrapper for slides -->
								<div class="carousel-inner promo-img" role="listbox">
									<div class="item active">
								    	<img src="images/promo_slider1.jpg" alt="...">
									</div>
								    <div class="item">
								    	<img src="images/promo_slider2.jpg" alt="...">
								    </div>
								</div>

									  <!-- Controls -->
									<a class="left carousel-control" href="#carousel-example-generic<?php echo $id+$i.'-01'; ?>" role="button" data-slide="prev">
									<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
									</a>
									<a class="right carousel-control" href="#carousel-example-generic<?php echo $id+$i.'-01'; ?>" role="button" data-slide="next">
									<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
									</a>
							</div>
							<ul class="list-inline">
								<li><a href="#"><i class="fa fa-heart"></i>1023</a></li>
								<li><a href="#"><i class="fa fa-thumbs-up"></i>55</a></li>
								<li><a href="#"><i class="fa fa-comment"></i>21</a></li>
							</ul>
						</div>
					</div>
					<div class="row" >
						<div class="col-md-12">
							<div class="row border_button">
								<div class="col-md-3 col-sm-3 col-xs-12  content-bloger-img">
									<a href="architect_pro.html">
									<img src="images/man_img.png" class="img-responsive" alt="carousel-img">
									</a>
								</div>
								<div class="col-md-9 col-sm-9 col-xs-12  content-comment-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  <a href="project_page.html">  View Full Story</a></p>
									<p class="bloger-text"><a href="architect_pro.html">Mr.X</a><br>Next date: Wed, Mar 11th at 2:00PM</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-sm-6 content">
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12 content-right">
							<h2>LIVING / DINNING</h2>
							<div id="carousel-example-generic<?php echo $id+$i.'-02'; ?>" class="carousel slide" data-ride="carousel">
									  <!-- Indicators -->
									  <!-- Wrapper for slides -->
								<div class="carousel-inner promo-img" role="listbox">
									<div class="item active">
								    	<img src="images/promo_slider2.jpg" alt="...">
									</div>
								    <div class="item">
								    	<img src="images/promo_slider3.jpg" alt="...">
								    </div>
								</div>

									  <!-- Controls -->
									<a class="left carousel-control" href="#carousel-example-generic<?php echo $id+$i.'-02'; ?>" role="button" data-slide="prev">
									<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
									</a>
									<a class="right carousel-control" href="#carousel-example-generic<?php echo $id+$i.'-02'; ?>" role="button" data-slide="next">
									<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
									</a>
							</div>
							<ul class="list-inline">
								<li><a href="#"><i class="fa fa-heart"></i>1023</a></li>
								<li><a href="#"><i class="fa fa-thumbs-up"></i>55</a></li>
								<li><a href="#"><i class="fa fa-comment"></i>21</a></li>
							</ul>
						</div>
					</div>
					<div class="row" >
						<div class="col-md-12">
							<div class="row border_button">
								<div class="col-md-3 col-sm-3 col-xs-12  content-bloger-img">
									<a href="architect_pro.html">
									<img src="images/man_img.png" class="img-responsive" alt="carousel-img">
									</a>
								</div>
								<div class="col-md-9 col-sm-9 col-xs-12  content-comment-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  <a href="project_page.html">  View Full Story</a></p>
									<p class="bloger-text"><a href="architect_pro.html">Mr.X</a><br>Next date: Wed, Mar 11th at 2:00PM</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


<?php $j++; } ?>

