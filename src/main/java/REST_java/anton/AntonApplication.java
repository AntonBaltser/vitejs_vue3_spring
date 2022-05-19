package REST_java.anton;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class AntonApplication {

	public static void main(String[] args) {
		SpringApplication.run(AntonApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfig(){
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**"); //нужно отключить при деплои  или прописать url для раздачи api
			}
		};
	}
}
