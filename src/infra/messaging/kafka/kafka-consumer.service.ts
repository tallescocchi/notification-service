import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['enabled-shad-8914-us1-kafka.upstash.io:9092'],
        sasl: {
        mechanism: 'scram-sha-256',
        username: 'ZW5hYmxlZC1zaGFkLTg5MTQkafpFPIhh70D_pxNht0x72mdvPtPY_40CQMhQ24c',
        password: '25d6e9dd8b1e4bc3a4ea6eddd5110e91',
        },
        ssl: true,
      }
    })
  }
  async onModuleDestroy() {
    await this.close()
  }
}