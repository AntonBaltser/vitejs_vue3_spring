package REST_java.anton.controller;  //ctrl+alt+o удалить неиспользуемые импорты

import REST_java.anton.domain.Message;
import REST_java.anton.domain.Views;
import REST_java.anton.repo.MessageRepo;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin//**************удалитьь
@RequestMapping("message")
public class MessageController {
    private final MessageRepo messageRepo; //alt+enter генерируем конструктор
    @Autowired //анотация, что бы спрингу было понятнее
    public MessageController(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    @GetMapping
    @JsonView(Views.IdName.class)
    public List<Message> list(){
        return messageRepo.findAll();
    }
    @GetMapping("{id}")
    @JsonView(Views.FullMessage.class)
    public Message getOne(@PathVariable("id") Message message) {
        return message;
    }
    @PostMapping
    public Message create(@RequestBody Message message) {
        message.setCreationDate(LocalDateTime.now()); //добавляем время к записи
        return  messageRepo.save(message);
    }
    @CrossOrigin
    @PutMapping("{id}")
    public Message update(
            @PathVariable("id") Message messageFromDb,
            @RequestBody Message message
    ) {
        BeanUtils.copyProperties(message, messageFromDb, "id"); //из message скопируем все поля в messageFromDb кроме id
        return messageRepo.save(messageFromDb);
    }
    @CrossOrigin
    @DeleteMapping ("{id}")
    public void delete(@PathVariable("id") Message message) {
        messageRepo.delete(message);
    }
//    настройки websocket
    @MessageMapping("/changeMessage")
    @SendTo("/topic/activity")
    public Message change(Message message) {
        return messageRepo.save(message);
    }
}
