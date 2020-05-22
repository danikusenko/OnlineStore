const basket = `<div id="basket-empty">
	<h1>Корзина пуста</h1>
	<h2>Ваша корзина покупок пуста</h2>
</div>
<div id="basket-content">
	<h1>Оформление заказа</h1>
	<h2>Список товаров</h2>
	<div class="phones-in-basket">		
		<table id="phoneTable">
			<th>
				<label class="phones-in-basket__checkbox-style">
					<input type="checkbox" name="choose_all_phones" onclick="headCheckboxClick(this)" value="true" checked>
					<span class="phones-in-basket__checkmark"></span>
				</label>
			</th>
			<th>Мобильный телефон</th>
			<th>Количество</th>
			<th>Доставка</th>
			<th>Cтоимость</th>					
		</table>				
	</div>	
	<ul id="phoneBasketInMobileVersion" class="phones-in-basket-for-mobile-version">			
	</ul>
	<div class="basket-footer">
		<a id=goBack onclick="getPage('index.html')">Вернуться на главную</a>
		<div class="basket-footer__cost-and-checkout">
			<div>
				<span>Общая стоимость:&nbsp;</span>
				<span id=totalCost>totalCost&nbsp;р.</span>
			</div>
			<input id=checkoutButton type="submit" value="Оформить заказ">	
		</div>	
	</div>
</div>`