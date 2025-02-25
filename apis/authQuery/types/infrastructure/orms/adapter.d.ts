export interface Adapter<DBService, DBName> {
    get(): Promise<DBService>;
    connect(): Promise<DBName>;
    disconnect(): Promise<void>;
}
