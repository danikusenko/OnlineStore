const filterPage = `
	<div id="body">
	<div class="title-and-close">		
		<h1>Подробный фильтр</h1>
		<a class="title-and-close__close-icon" onclick="onNavigate('/home')"></a>
	</div>
	<div class="flex-container-in-filter">
		<div class="flex-container-in-filter__filter-phones">
			<form action="http://OnlineStore/filter" method="post">
				<div class="flex-container-in-filter__filter-block">
					<span class="flex-container-in-filter__filter-block-option-title">Цена, б.р.</span>
					<div class="flex-container-in-filter__inputs-to-row">
						<input class="flex-container-in-filter__input-gap" type="number" name="fromPrice" placeholder="от" min="1">
						<input class="flex-container-in-filter__input-gap" type="number" name="toPrice" placeholder="до">	
					</div>					
					<label class="flex-container-in-filter__option-title" for="wordsPhoneName">Слова в названии</label>
					<input id=wordsPhoneName type="text" name="wordsPhoneName"><br>
					<details open>
						<summary><span class="flex-container-in-filter__filter-block-option-title">Производитель</span></summary>
							<label class="flex-container-in-filter__checkbox-style">Samsung
								<input type="checkbox" name="producer" 
								value="Samsung">
								<span class="flex-container-in-filter__checkmark"></span>						
							</label>
							<label class="flex-container-in-filter__checkbox-style">Xiaomi
								<input type="checkbox" name="producer"
								value="Xiaomi">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">Huawei
								<input type="checkbox" name="producer"
								value="Huawei">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">Apple
								<input type="checkbox" name="producer"
								value="Apple">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">Nokia
								<input type="checkbox" name="producer"
								value="Nokia">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>			
					</details><br>		
					<details open>
						<summary><span class="flex-container-in-filter__filter-block-option-title">Платформа</span></summary>
							<label class="flex-container-in-filter__checkbox-style">iOS
								<input type="checkbox" name="platform" 
								value="iOS">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">Android
								<input type="checkbox" name="platform"
								value="Android">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">Windows Phone
								<input type="checkbox" name="platform"
								value="Windows Phone">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>							
					</details><br>
					<details open>				
						<summary><span class="flex-container-in-filter__option-title">Количество SIM-карт</span></summary>
							<input id=simCards type="number" name="simCards" 
							min="1" max="4"><br>												
					</details><br>	
					<details open>
						<summary><span class="flex-container-in-filter__filter-block-option-title">Оперативная память</span></summary>
							<label class="flex-container-in-filter__checkbox-style">12 Гб
								<input type="checkbox" name="RAM" 
								value="12">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">10 Гб
								<input type="checkbox" name="RAM" 
								value="10">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">8 Гб
								<input type="checkbox" name="RAM" 
								value="8">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">6 Гб
								<input type="checkbox" name="RAM" 
								value="6">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">4 Гб
								<input type="checkbox" name="RAM" 
								value="4">	
								<span class="flex-container-in-filter__checkmark"></span>
							</label>								
					</details><br>
					<details open>
						<summary><span class="flex-container-in-filter__filter-block-option-title">Встроенная память</span></summary>
							<label class="flex-container-in-filter__checkbox-style">1 Tб
								<input type="checkbox" name="builtInMemory" 
								value="1000">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">512 Гб
								<input type="checkbox" name="builtInMemory" 
								value="512">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">256 Гб
								<input type="checkbox" name="builtInMemory" 
								value="256">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">128 Гб
								<input type="checkbox" name="builtInMemory" 
								value="128">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>
							<label class="flex-container-in-filter__checkbox-style">64 Гб
								<input type="checkbox" name="builtInMemory" 
								value="64">
								<span class="flex-container-in-filter__checkmark"></span>
							</label>									
					</details><br>
					<details open>				
						<summary><span class="flex-container-in-filter__option-title">Диагональ экрана, "</span></summary>
							<div class="flex-container-in-filter__inputs-to-row">					
								<input class="input-gap" type="number" name="fromDiagonal" placeholder="от">
								<input class="input-gap" type="number" name="toDiagonal" placeholder="до">	
							</div>							
					</details><br>
					<details open>				
						<summary><span class="flex-container-in-filter__option-title">Аккумулятор</span></summary>
							<label>
								<input type="radio" name="battery" 
								value="noMatter" checked>Не важно
							</label><br>
							<label>							
								<input type="radio" name="battery" 
								value="nonRemovable">Несъемный
							</label><br>
							<label>
								<input type="radio" name="battery" 
								value="removable">Съёмный
							</label><br>									
					</details><br><br>		
					<input id="searchPhones" type="submit" name="searchPhones" value="Найти телефоны">
				</div>
			</form>
		</div>
		</div>
`