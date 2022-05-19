package REST_java.anton.domain;
//помеченные этой анотациия будут видны поля отмеченные интерфейсом или унаследованым от него
public final class Views {
    public interface Id{}  //будем помечать где видны только id
    public interface IdName extends Id{}
    public interface FullMessage extends Id {}
}
