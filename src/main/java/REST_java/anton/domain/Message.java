package REST_java.anton.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity  //что бы спринг знал что работает с сущьностью
@Table  //что бы знал что таблицы и искал ее БД
//@Data //автоматически сздает геттеры и сеттеры (на момент записи видое она не работала, пойдем други путем)
@ToString(of = {"id", "text"}) // в стриге будут перечисленные поля
@EqualsAndHashCode(of = {"id"})
public class Message {
    @Id //гвоорит что поле id для даблицы и автоматически генерирует занчения
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Views.Id.class) //делает невидной для клиента ненужные поля
    private Long id;      //ctrl+alt+o оптимизируте импорты
    @JsonView(Views.IdName.class)
    private String text;  //alt+ins генерация getters and setters
    @Column(updatable = false) //сделать LocalDataTime не обновляемым, что бы случайно не обновить
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd:mm:ss") //делаем поле с датой в базу данных
    @JsonView(Views.FullMessage.class)
    private LocalDateTime creationDate;

    public LocalDateTime getCreationDate() {
        return creationDate;
    }
    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }
    public Long getId() {  //ins+alt генерирует геттеры и сеттеры
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
