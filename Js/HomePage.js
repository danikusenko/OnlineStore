const home = `
<div id="phones-content">
	<div class="title-and-filter-button">
		<h1 id=title>Мобильные телефоны</h1>
		<a id="filter" onclick="onNavigate('/filter')">Фильтр</a>
	</div>
	<div class="flex-container">
		<div class="flex-container__filter-phones">
			<form action="http://OnlineStore/filter" method="post">
				<div class="flex-container__filter-block">
					<span class="flex-container__filter-block-option-title">Цена, б.р.</span>
					<div class="flex-container__inputs-to-row">
						<input class="flex-container__input-gap" type="number" name="fromPrice" placeholder="от" min="1">
						<input class="flex-container__input-gap" type="number" name="toPrice" placeholder="до">	
					</div>	
					<span class="flex-container__filter-block-option-title">Слова в названии</span>
					<input id=wordsPhoneName type="text" name="wordsPhoneName"><br>
					<details open>
						<summary><span class="flex-container__filter-block-option-title">Производитель</span></summary>
							<label class="flex-container__checkbox-style">Samsung
								<input type="checkbox" name="producer" 
								value="Samsung">
								<span class="flex-container__checkmark"></span>						
							</label>
							<label class="flex-container__checkbox-style">Xiaomi
								<input type="checkbox" name="producer"
								value="Xiaomi">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">Huawei
								<input type="checkbox" name="producer"
								value="Huawei">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">Apple
								<input type="checkbox" name="producer"
								value="Apple">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">Nokia
								<input type="checkbox" name="producer"
								value="Nokia">
								<span class="flex-container__checkmark"></span>
							</label>			
					</details><br>		
					<details open>
						<summary><span class="flex-container__filter-block-option-title">Платформа</span></summary>
							<label class="flex-container__checkbox-style">iOS
								<input type="checkbox" name="platform" 
								value="iOS">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">Android
								<input type="checkbox" name="platform"
								value="Android">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">Windows Phone
								<input type="checkbox" name="platform"
								value="Windows Phone">
								<span class="flex-container__checkmark"></span>
							</label>							
					</details><br>
					<details open>
						<summary><span class="flex-container__filter-block-option-title">Количество SIM-карт</span></summary>
							<input id=simCards type="number" name="simCards" 
							min="1" max="4"><br>												
					</details><br>	
					<details open>
						<summary><span class="flex-container__filter-block-option-title">Оперативная память</span></summary>
							<label class="flex-container__checkbox-style">12 Гб
								<input type="checkbox" name="RAM" 
								value="12">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">10 Гб
								<input type="checkbox" name="RAM" 
								value="10">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">8 Гб
								<input type="checkbox" name="RAM" 
								value="8">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">6 Гб
								<input type="checkbox" name="RAM" 
								value="6">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">4 Гб
								<input type="checkbox" name="RAM" 
								value="4">	
								<span class="flex-container__checkmark"></span>
							</label>								
					</details><br>
					<details open>
						<summary><span class="flex-container__filter-block-option-title">Встроенная память</span></summary>
							<label class="flex-container__checkbox-style">1 Tб
								<input type="checkbox" name="builtInMemory" 
								value="1000">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">512 Гб
								<input type="checkbox" name="builtInMemory" 
								value="512">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">256 Гб
								<input type="checkbox" name="builtInMemory" 
								value="256">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">128 Гб
								<input type="checkbox" name="builtInMemory" 
								value="128">
								<span class="flex-container__checkmark"></span>
							</label>
							<label class="flex-container__checkbox-style">64 Гб
								<input type="checkbox" name="builtInMemory" 
								value="64">
								<span class="flex-container__checkmark"></span>
							</label>									
					</details><br>
					<details open>
						<summary><span class="flex-container__filter-block-option-title">Диагональ экрана, "</span></summary>
							<div class="flex-container__inputs-to-row-diagonal">					
								<label>
									<input class="flex-container__input-gap" type="number" name="fromDiagonal" placeholder="от">
								</label>
								<label>
									<input class="flex-container__input-gap" type="number" name="toDiagonal" placeholder="до">
								</label>	
							</div>							
					</details><br>
					<details open>				
						<summary><span class="flex-container__filter-block-option-title">Аккумулятор</span></summary>
							<label>
								<input type="radio" name="battery" 
								value="noMatter" checked >Не важно
							</label><br>
							<label>
								<input type="radio" name="battery" 
								value="nonRemovable">Несъемный
							</label><br>
							<label>
								<input type="radio" name="battery" 
								value="removable">Съёмный
							</label><br>									
					</details><br>		
					<input id="searchPhones" type="submit" name="searchPhones" value="Найти телефоны">
				</div>
			</form>
		</div>
		<div class="phone-container">
			<ul id=phone_list class="phone-container__model-list">				
			</ul>
		</div>
	</div>
</div>`