namespace Web_API_REST.Models
{
    // Modelo para representar un nodo en una lista enlazada, que contiene un Id y un valor.
    public class LinkedListNodeModel
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Value { get; set; } = string.Empty;
    }

}
