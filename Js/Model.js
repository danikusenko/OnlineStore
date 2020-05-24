class MobilePhone {
		constructor(id,full_name, photo_path, producer, platform,sim_cards_number, RAM, internal_memory,
			screen_diagonal, price, availability, type, body_color, body_material, processor, cores_number, screen_resolution,
			screen_aspect_ration, screen_technology, memory_card_support, accelerometer, light_sensor, proximity_sensor) {
			this.id = id;
			this.full_name = full_name;
			this.photo_path = photo_path;
			this.producer = producer;
			this.platform = platform;
			this.sim_cards_number = sim_cards_number;
			this.RAM = RAM;
			this.internal_memory = internal_memory;
			this.screen_diagonal = screen_diagonal;
			this.price = price;
			this.availability = availability;
			this.type = type;
			this.body_color = body_color;
			this.body_material = body_material;
			this.processor = processor;
			this.cores_number = cores_number;
			this.screen_resolution = screen_resolution;
			this.screen_aspect_ration = screen_aspect_ration;
			this.screen_technology = screen_technology;
			this.memory_card_support = memory_card_support;
			this.accelerometer = accelerometer;
			this.light_sensor = light_sensor;
			this.proximity_sensor = proximity_sensor;			
		}	
	}	
let phone = new MobilePhone('phone','Смартфон Xiaomi Redmi 7A 2GB/32GB Gem Blue', 'Images/Photo.jpeg','Xiaomi', 
	"Android", 2, 2,32, 5.4, 100.54, true, 'Cмартфон','Синий', 'Пластик', 'Qualcomm Snapdragon 439', '8 (2+6)', 
	'1440×720', '18:9', 'IPS','да, microSD (до 256 Гб)','есть', 'есть', 'есть');
let phone2 = new MobilePhone("phone2","Samsung Galaxy A10 2Gb/32Gb Blue (SM-A105F/DS)", "Images/Phone2.jpg","Samsung", "Android", 
	2, 2,32, 5.4, 299.99, true, 'Cмартфон','Синий', 'Пластик', 'Exynos 7884', '8 (2+6)', '720х1520', 
	'19:9', 'TFT','да, microSD (до 512 Гб)','есть', 'есть', 'есть');
let phone3 = new MobilePhone("phone3","Apple iPhone Xr 64Gb Red", "Images/Phone3.jpg","Apple", "iOS", 2, 2,32, 5.4, 
	599.99, true, 'Cмартфон','Красный', 'Металл/стекло', 'Apple A12 Bionic', '6 (2+4)', '1792×828', '19.5:9', 'IPS', 
	'нет','есть', 'есть', 'есть');
let phoneList = [phone, phone2, phone3]; 
let basket_of_goods = [];	