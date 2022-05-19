package REST_java.anton.repo;
import REST_java.anton.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MessageRepo extends JpaRepository<Message, Long> {
}
